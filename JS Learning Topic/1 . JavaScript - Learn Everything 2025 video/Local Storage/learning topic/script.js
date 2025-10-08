// localStorage
// 5mb porjonto data save kore rakha jay
// localStorage.setItem("name","kamrujjaman")

// let show = localStorage.getItem("name")

// localStorage.removeItem("name")

// localStorage.clear()


// sessionStorage
//sessionStorage tap close korle data remove hoye jabe  
// 5mb porjonto data save kore rakha jay

sessionStorage.setItem("name","kamrujjaman")


// cookie
// page reload hole data server a sole jay 

document.cookie = "age = 20"


// localStorage a array save korar upay
localStorage.setItem("friends",JSON.stringify(["kk","mm"]))
console.log(localStorage.getItem("friends")) //string array paoya jabe

// string Array ke normal array korar way
const arr = localStorage.getItem("friends")
console.log(JSON.parse(arr))

const testArr = JSON.parse(arr)
console.log(testArr[0])