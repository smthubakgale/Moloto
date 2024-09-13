
function toMatrix(str)
{
    var arr = str.trim().replaceAll(" ","_").split("");
    var ret = [];

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
        if(b == "k"){ a = [2,0]; }
        if(b == "l"){ a = [2,1]; }
        if(b == "m"){ a = [2,2]; }
        if(b == "n"){ a = [2,3]; }
        if(b == "o"){ a = [2,4]; }
        if(b == "p"){ a = [2,5]; }
        if(b == "q"){ a = [2,6]; }
        if(b == "r"){ a = [2,7]; }
        if(b == "s"){ a = [2,8]; }
        if(b == "t"){ a = [2,9]; }
        if(b == "u"){ a = [3,0]; }
        if(b == "v"){ a = [3,1]; }
        if(b == "w"){ a = [3,2]; }
        if(b == "x"){ a = [3,3]; }
        if(b == "y"){ a = [3,4]; }
        if(b == "z"){ a = [3,5]; }
        if(b == "_"){ a = [3,6]; }
        if(b == "."){ a = [3,7]; } 

        if(k < 40)
        {
          ret.push(a);
        }
    });

    var r = [];
    for(var k = 0 ; k < 40;k++)
    {
        if(k < arr.length)
        {
            r.push(ret[k]);
        }
        else{
            r.push([3,7]);
        }
    }
}

function createModel() 
{
  var model = tf.sequential({
       layers: [
         tf.layers.dense({inputShape: [2,40], units:32 , activation: 'relu'}),    // input size [n ,2 ,40] -> shape [2,40] => [2 , 40*1] => [batch , 2 , 40]
         tf.layers.flatten() ,                                                   // flatten -> [batch , 2*40 ] => [ batch , 80] 
         tf.layers.dense({inputshape:[40] , units:1 ,  activation: 'softmax'}),   // output shape [n, 40 ] -> shape [40] => [40*1] => [batch , 40]
       ]
      });

  return model;
}

