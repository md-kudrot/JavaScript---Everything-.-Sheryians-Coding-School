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

// ********************2 new Data type***************

// 1. symbol:

let u1 = Symbol("uid");
let u2 = Symbol("uid");
// console.log(u1===u2) output: false

// Symbol কী:
// Symbol হলো একটি অদ্বিতীয় নাম বা ট্যাগ।

// দুইটি Symbol কখনো একরকম হয় না।

// এটি ব্যবহার করা হয় কিছু uniquely label করতে।

// 2. bigint:

console.log(Number.MAX_SAFE_INTEGER) //output: 9007199254740991 er mane holo 1ta variaable 9007199254740991 er besi data store korte parbe na.
//  akon jodi amra er theke besi data store korte cai tahole use korte hbe bigint. 
// bigint hosse 9007199254740991n pura sonkhar sese n jukto kora , ekon atay amra jeta jog korbo tar sese n jukto kore add korte hbe 

// code demo:
// let l = 9007199254740991n;
// let k = l + 1n;  // ekhane 1er sate n jukto na korle sotik uttor asbe na. 
// console.log(k)



// Dynamic typing:
// js a static typing nai. akhane dynamic typing kaj kore. mane amra jekono vairable er data ke change korte parbo , sudu data noy data er data type keo change korte parbo.

// code demo:
// let r  = 0; // number data type
// r = true; // bulian data type 
// r = "string data type"
// akhane 1ta jinis lokkho kora jasse r variable er data type and data 2tai change kora hosse kintu kono error asse na ,
//  jodi js static typing hoito tahole 1ta variable sudu 1ta data type support korto and sei variable ke oi data type dia poriborton korte hoto....



//  Typeof quirks (e.g, typeof null === object)

// javascript a kisu odvud jinis ase ja interview qus er jonno mone rakh te hbe

console.log(typeof null) // output = object
console.log(typeof NaN) //  output = number
console.log(NaN === NaN) //  output = false
console.log([] + []) //  output = '' faka string hoye jay
console.log(1 == "1") //  output = true
console.log(1 === "1") //  output = false


// ** Type coercion :

//  js a 1 + "1"  modde + kora hole seta number1 take js convert kore "1" a convart kore. karon js a + 2ta kaj kore(add and concatination kora). er jonno output ase 11
//   js - sudu biyog er kaj kore er jonno 2 - "1" = 1 hoy, ekhane string numver a rupantor hosse



// Truthy vs falsy values

// falsy: 0 , false , "" , null , undefined , NaN , document.all
// agula falsy value mane agula false a convert hoy if else condition a agular modde kew thakle else kaj kore.

// falsy bade sob true

// predict the result:
console.log(true + false) // output : 1
console.log(null + 1) //outptu : 1
console.log(5 + "5") //output : 55
console.log(!!undefined) //output : false // this is falsy falue 
 

