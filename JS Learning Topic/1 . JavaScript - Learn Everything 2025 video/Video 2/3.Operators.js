// Operators  : Arithmetic, comparison, logical, assignment, unary, ternary

// 1. Arithmetic: + - / * % ** 


// 2.comparison:
// = [value deoyai js a = er kaj atar name assignment operator]

// == [comparison operators: ata sudu value check kore type check kore na]

// === [Strictly equal: ata type and value 2tai check kore]

// !=

// !== [Strictly not equal]

// >=

// <=

// >

// >
 
// 3. assignment operators(=):
// let a = 12;
// a += 3 //+=3 mane holo a er ager value orthat 12 er sate 3 jog kore abr a variable a rakha. akoi vabe {-= ,*= ,/= , %=} kaj kore

// a -= 11;

// a *= 2;

// a /= 2

// a %= 3;

// console.log(a) // final output: 1


//3. logical operator:
// && || !

// and operator: && = 2ta condition true hote hbe thole code solbe

// or operator: || = jekono 1ta condition tik hoilei code kaj korbe
 

// not operator: ! = ata jar samne deoya hbe take ulta kore

// code demo:
// console.log(!true) //output: false
// console.log(!false) //output true

// use of !!
// kono data er value true naki false ata dekhar jonno amra !! use kori
// code demo:
// console.log(!!"kk") //true
// console.log(!!0) //false
// console.log(!!null) //falsy falue tai output : false


// 4.unary operator
// + -  typeof ++ --

// + kono string number ke number a convert korar sohoj upay holo er samne + deoya
// let k = "12";
// console.log(typeof(+k)) // output: number

// preincrement(++a):
// ++ variable er samne use korle atake bole preincrement
// code demo:
// let y = 23;

// console.log(++y) // output: 24 // preincrement

// console.log(y++) // output = 24 //postincrement
// console.log(y) // output = 25


// 5. ternary (?:):
// condition ? true hole akhan kar code : false hole akhan kar code
// code demo:
12>13 ? console.log("true") : console.log(false) // output: false









// ********** typeof************

console.log(typeof(null)) //output: object

console.log(typeof([])) //object

console.log(typeof(NaN)) // number