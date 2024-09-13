

function createModel() {
  // Create a sequential model
  const model = tf.sequential();

  //;
  var inp = tf.layers.dense({
    units:2,
    inputDim: [2], 
    activation:"sigmoid"
  });
  var out = tf.layers.dense({
    units: 1,
    activation:"softmax"
  });
  //  
  model.add(inp); 
  model.add(out);
  //:

  return model;
}

