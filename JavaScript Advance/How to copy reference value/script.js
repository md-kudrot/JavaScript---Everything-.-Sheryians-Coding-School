// a er man change korle b er mano change hoye hay... ei somossa somandhaner upay

// var a = [1,2,3,4,5]
// var b = [...a]
// console.log(b.pop())
// akhne sudu b theke 5 sore jabe
// console.log(b)
// a opibortito thakbe
// console.log(a)

// ******************* this for mula same as for object************
var a = {
    name: "kudet",
    age : 20,

}
var b ={
    ...a
}
// akhane amra b er man poriborton korle just b er man er poriborton hbe
console.log(b.age = 30)
console.log(b)

// a er mane kono poriborton hbe na
console.log(a)
