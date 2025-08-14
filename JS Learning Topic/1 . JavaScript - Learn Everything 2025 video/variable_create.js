// var let and const


var a ; // declareations
var a = 324; // declarations and initialization

// var er kisu niom
// 1. window te variable add kore dey
// 2. function scoped 
// 3. akoi name a bar bar variable declaration kora jay
// 3. demo:
var b = 20;
var b = 20;

// ata let er kheltre possible na
// demo:
// let b = 45;
// let b = 30;
// it will provide us this error: Uncaught SyntaxError: Identifier 'b' has already been declared.


let a = 23 ;
let a ;

const a = 12;
// this is not allow in js
// const a;

// this is possible in js
a = 23;


// ***********
// scope(global, function scope , block scope)

// global scope:
// atake coder jekono sthan theke access kora jay
var a = 21; // example of global scope

// function scope
// sudhu function a access kora jabe
// the example of function scope
function abcd (){
    if(true){
        var a = 1; 
    }
}

// block scope
if(true){
    let a = 23; // ata sudhu {} er modde kaj korbe er baire theke access kora jabe na
}



// reassignment:
// var b = 20;
// b = 10;

//redeclaration:
// var b = 20;
// var b = 30;
// note: redeclaration is only possible with var ..

// temporal dead zone: variable jekhane toiri hoy tar oporer line gulake bolahoy temporal dead zone(tdz).

// demo:
console.log(x)

let x = 12;

//  cannot access a before initialization

// undefined deoyar kotha kintu se dei ni karon se jane x er value define kora ase . karon x er tdz a console log kora hoyese

// ei x variable er 1-69 number line obdi tdz.


