var model;
var outs = [];

function createModel() 
{
    let md = tf.sequential();
    const hidden = tf.layers.dense({
      units: 15,
      inputShape: [2],
      activation: 'sigmoid'
    });
  
    const output = tf.layers.dense({
      units: 9,
      activation: 'softmax'
    });
    md.add(hidden);
    md.add(output);
  
    const LEARNING_RATE = 0.25;
    const optimizer = tf.train.sgd(LEARNING_RATE);
  
    md.compile({
      optimizer: optimizer,
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    });
  
    return md;
}

function saveModel(cb) 
{ 
   if (localStorage.length > 0)
   {
      let item = Number(localStorage.getItem('saveNo'));
      model.save(`localstorage://hevoPredict-${item + 1}`).then(()=>
      {
         localStorage.setItem('saveNo', item + 1);
         localStorage.setItem(`hevoOuts-${item + 1}` , JSON.stringify(outs));
        cb();
      });
   }
   else 
   {
      model.save(`localstorage://hevoPredict-1`).then(()=>
      {
          localStorage.setItem('saveNo', 1);
          localStorage.setItem(`hevoOuts-${1}` , JSON.stringify(outs));
          cb();
      });
     
  }
}
 function loadMd(cb) 
 { 
   if (localStorage.length > 0) 
   {
    const LEARNING_RATE = 0.25;
    const optimizer = tf.train.sgd(LEARNING_RATE);
    let item = Number(localStorage.getItem('saveNo'));
    
    if(item > 0)
    { 
        tf.loadLayersModel(`localstorage://hevoPredict-${item}`).then((md)=>
        {
            var m = md;
            
            m.compile({
              optimizer: optimizer,
              loss: 'categoricalCrossentropy',
              metrics: ['accuracy'],
            });
            outs = JSON.parse(localStorage.setItem(`hevoOuts-${item}`));
            cb(m);
        });
   }
   else{
       cb(null);
   }
  } 
  else 
  {
      alert('No previous models saved!');
      cb(null);
  }
}


