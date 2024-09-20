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
   if (window.top.localStorage.length > 0)
   {
      let item = Number(window.top.localStorage.getItem('saveNo'));
      window.top.model.save(`indexeddb://hevoPredict-${item + 1}`).then(()=>
      {
         window.top.localStorage.setItem('saveNo', item + 1);
         window.top.localStorage.setItem(`hevoOuts-${item + 1}` , JSON.stringify(window.top.outs));
        cb();
      });
   }
   else 
   {
      window.top.model.save(`indexeddb://hevoPredict-1`).then(()=>
      {
          window.top.localStorage.setItem('saveNo', 1);
          window.top.localStorage.setItem(`hevoOuts-${1}` , JSON.stringify(window.top.outs));
          cb();
      });
     
  }
}
 function loadMd(cb) 
 { 
   if (window.top.localStorage.length > 0) 
   {
    const LEARNING_RATE = 0.25;
    const optimizer = tf.train.sgd(LEARNING_RATE);
    let item = Number(window.top.localStorage.getItem('saveNo'));
    
    if(item > 0)
    { 
        tf.loadModel(`indexeddb://hevoPredict-${item}`).then((md)=>
        {
            var m = md;
            
            m.compile({
              optimizer: optimizer,
              loss: 'categoricalCrossentropy',
              metrics: ['accuracy'],
            });
            window.top.outs = JSON.parse(window.top.localStorage.setItem(`hevoOuts-${item}`));
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


