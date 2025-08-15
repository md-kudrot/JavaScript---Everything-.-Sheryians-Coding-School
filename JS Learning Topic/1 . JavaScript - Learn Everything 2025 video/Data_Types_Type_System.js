// Data type 2 prokar:
// 1. primitives
// 2. reference

// 1.primitive: sesokol vlaue jader direct copy kora jay.
// string , number, bollean , null , undefined, symbol, bigint

//  code demo:
let a = 2;
let b = a;
a = a+4;
// console.log(a)  output 6;
// console.log(b)  output 2;

// akhane a er value b te sompurnovabe copy hoyese . a er value change korle b er value chang hbe na  



// 2. je value gulake copy korle sudu er reference copy hoy direct value copy hoy na
// arrays , objects, functions
// {} [] ()
// code demo:
let n = [2,3,4,5];
let x = n;
// akhane n er value x a reference hisebe pass hoyese  mane jodi amra n a kono poriborton kori tahole seta x eo poriborton hbe.....

n.pop();
// console.log(n) output: [ 2, 3, 4 ]
// console.log(x) output: [ 2, 3, 4 ]