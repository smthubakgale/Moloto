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

function fromMatrix(mt)
{
    var ret = "";

    mt.forEach((s)=>
    {
        var a = "";

        if(eq(s,[0,1])){ a = "0"; }
        if(eq(s,[0,2])){ a = "1"; }
        if(eq(s,[0,3])){ a = "2"; }
        if(eq(s,[0,4])){ a = "3"; }
        if(eq(s,[0,5])){ a = "4"; }
        if(eq(s,[0,6])){ a = "5"; }
        if(eq(s,[0,7])){ a = "6"; }
        if(eq(s,[0,8])){ a = "7"; }
        if(eq(s,[0,9])){ a = "8"; }
        if(eq(s,[1,0])){ a = "9"; }
        if(eq(s,[1,1])){ a = "a"; }
        if(eq(s,[1,2])){ a = "b"; }
        if(eq(s,[1,3])){ a = "c"; }
        if(eq(s,[1,4])){ a = "d"; }
        if(eq(s,[1,5])){ a = "e"; }
        if(eq(s,[1,6])){ a = "f"; }
        if(eq(s,[1,7])){ a = "g"; }
        if(eq(s,[1,8])){ a = "h"; }
        if(eq(s,[1,9])){ a = "i"; }
        if(eq(s,[2,0])){ a = "j"; }
        if(eq(s,[2,1])){ a = "k"; }
        if(eq(s,[2,2])){ a = "l"; }
        if(eq(s,[2,3])){ a = "m"; }
        if(eq(s,[2,4])){ a = "n"; }
        if(eq(s,[2,5])){ a = "o"; }
        if(eq(s,[2,6])){ a = "p"; }
        if(eq(s,[2,7])){ a = "q"; }
        if(eq(s,[2,8])){ a = "r"; }
        if(eq(s,[2,9])){ a = "s"; }
        if(eq(s,[3,0])){ a = "t"; }
        if(eq(s,[3,1])){ a = "u"; }
        if(eq(s,[3,2])){ a = "v"; }
        if(eq(s,[3,3])){ a = "w"; }
        if(eq(s,[3,4])){ a = "x"; }
        if(eq(s,[3,5])){ a = "y"; }
        if(eq(s,[3,6])){ a = "z"; }
        if(eq(s,[3,7])){ a = "_"; }
        if(eq(s,[3,8])){ a = "."; }

        ret += a;
    });

    function eq(a1 , a2)
    {
        return JSON.stringify(a1) == JSON.stringify(a2);
    }

    return ret.trim();
}
function toMatrix(str)
{
    var arr = str.trim().replaceAll(" ","_").split("");
    var ret = [];

    console.log(arr);
    arr.forEach((s , k)=>
    {
        var a;
        var b = (s + "").toLowerCase();

        if(b == "0"){ a = [0,1]; }
        if(b == "1"){ a = [0,2]; }
        if(b == "2"){ a = [0,3]; }
        if(b == "3"){ a = [0,4]; }
        if(b == "4"){ a = [0,5]; }
        if(b == "5"){ a = [0,6]; }
        if(b == "6"){ a = [0,7]; }
        if(b == "7"){ a = [0,8]; }
        if(b == "8"){ a = [0,9]; }
        if(b == "9"){ a = [1,0]; }
        if(b == "a"){ a = [1,1]; }
        if(b == "b"){ a = [1,2]; }
        if(b == "c"){ a = [1,3]; }
        if(b == "d"){ a = [1,4]; }
        if(b == "e"){ a = [1,5]; }
        if(b == "f"){ a = [1,6]; }
        if(b == "g"){ a = [1,7]; }
        if(b == "h"){ a = [1,8]; }
        if(b == "i"){ a = [1,9]; }
        if(b == "j"){ a = [2,0]; }
        if(b == "k"){ a = [2,1]; }
        if(b == "l"){ a = [2,2]; }
        if(b == "m"){ a = [2,3]; }
        if(b == "n"){ a = [2,4]; }
        if(b == "o"){ a = [2,5]; }
        if(b == "p"){ a = [2,6]; }
        if(b == "q"){ a = [2,7]; }
        if(b == "r"){ a = [2,8]; }
        if(b == "s"){ a = [2,9]; }
        if(b == "t"){ a = [3,0]; }
        if(b == "u"){ a = [3,1]; }
        if(b == "v"){ a = [3,2]; }
        if(b == "w"){ a = [3,3]; }
        if(b == "x"){ a = [3,4]; }
        if(b == "y"){ a = [3,5]; }
        if(b == "z"){ a = [3,6]; }
        if(b == "_"){ a = [3,7]; }
        if(b == "."){ a = [3,8]; } 

        if(k < 20)
        {
          ret.push(a);
        }
    });

    var r = [];
    for(var k = 0 ; k < 20;k++)
    {
        if(k < arr.length)
        {
            r.push(ret[k][0]);
            r.push(ret[k][1]);
        }
        else{
            r.push(3);
            r.push(7);
        }
    }

  return r;
}

