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
      model.save(`indexeddb://hevoPredict-${item + 1}`).then(()=>
      {
        localStorage.setItem('saveNo', item + 1);
        cb();
      });
   }
   else 
   {
      model.save(`indexeddb://hevoPredict-1`).then(()=>
      {
          localStorage.setItem('saveNo', 1);
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
            tf.loadModel(`indexeddb://hevoPredic-${item}`).then((md)=>
            {
                var model = md;
                
                model.compile({
                  optimizer: optimizer,
                  loss: 'categoricalCrossentropy',
                  metrics: ['accuracy'],
                });
        
                cb(model);
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


