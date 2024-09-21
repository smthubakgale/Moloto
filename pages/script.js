 
var m_file;
var w_file; 
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

$(window).on("load",function(){
    $("#imc").on("click" , function()
        {
            window.parent.get_weights(function(w_file)
            {
                window.parent.get_model(function(m_file)
                {
                     tf.loadLayersModel(tf.io.browserFiles([m_file , w_file])).then((md)=>
                     {
                         alert("Model Uploaded Successfully"); 
                         model = md;
                     })  
                });
            });
        });
        $("#imw").on("click" , function()
        {
            window.parent.import_weights(function(file)
            {
                 alert("Model Weights Uploaded"); 
            });
        });
        $("#imm").on("click" , function()
        {
            window.parent.import_model(function(file)
            {
                 alert("Model Structure Uploaded"); 
            });
        });
        $("#exw").on("click" ,  function()
        { 
            if(model != null)
            {
                /*
               saveModel(function()
               {
                  alert("Weights Saved Successfully");
               }); 
              */
                 model.save('downloads://hevo').then(()=>
                 {
                    alert("Weights Saved Successfully");
                 });
              
            }
            else
            {
                alert("No Trained Model exists");
            }
        });
});

function saveModel(cb) 
{ 
   if (localStorage.length > 0)
   {
      let item = Number(localStorage.getItem('saveNo'));
      model.save(`indexeddb://hevoPredict-${item + 0}`).then(()=>
      {
         localStorage.setItem('saveNo', item + 1);
         localStorage.setItem(`hevoOuts-${item + 1}` , JSON.stringify(outs));
        cb();
      });
   }
   else 
   {
      model.save(`indexeddb://hevoPredict-1`).then(()=>
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
        tf.loadModel(`indexeddb://hevoPredict-${item}`).then((md)=>
        {
            var m = md;
            
            m.compile({
              optimizer: optimizer,
              loss: 'categoricalCrossentropy',
              metrics: ['accuracy'],
            });
            outs = JSON.parse(localStorage.getItem(`hevoOuts-${item}`));
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


