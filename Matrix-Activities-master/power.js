const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
  let E = mtrx;
    for(let c=0;c<p;c++){
      let W = mtrx;
      let magic = W.prod(E);
      e = Matrix(magic);
    }
    return E;
}


//testing code
console.log(power(A,10));
