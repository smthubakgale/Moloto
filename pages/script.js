
function toMatrix(str)
{
    var arr = str.split("");
    var ret = [];

    arr.forEach((s)=>
    {
        var a;
        var b = (s + "").toLowerCase();

        if(b == "0"){ a = [0,0]; }
        if(b == "1"){ a = [0,0]; }
        if(b == "2"){ a = [0,0]; }
        if(b == "3"){ a = [0,0]; }
        if(b == "4"){ a = [0,0]; }
        if(b == "5"){ a = [0,0]; }
        if(b == "6"){ a = [0,0]; }
        if(b == "7"){ a = [0,0]; }
        if(b == "8"){ a = [0,0]; }
        if(b == "9"){ a = [0,0]; }
        if(b == "a"){ a = [0,0]; }
        if(b == "b"){ a = [0,0]; }
        if(b == "c"){ a = [0,0]; }
        if(b == "d"){ a = [0,0]; }
        if(b == "e"){ a = [0,0]; }
        if(b == "f"){ a = [0,0]; }
        if(b == "g"){ a = [0,0]; }
        if(b == "h"){ a = [0,0]; }
        if(b == "i"){ a = [0,0]; }
        if(b == "j"){ a = [0,0]; }
        if(b == "k"){ a = [0,0]; }
        if(b == "l"){ a = [0,0]; }
        if(b == "m"){ a = [0,0]; }
        if(b == "n"){ a = [0,0]; }
        if(b == "o"){ a = [0,0]; }
        if(b == "p"){ a = [0,0]; }
        if(b == "q"){ a = [0,0]; }
        if(b == "r"){ a = [0,0]; }
        if(b == "s"){ a = [0,0]; }
        if(b == "t"){ a = [0,0]; }
        if(b == "q"){ a = [0,0]; }
        if(b == "r"){ a = [0,0]; }
    })
}

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

