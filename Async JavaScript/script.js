                    // what is sync
// suppose amra 4ta kaj korbo , 1ta kaj er output dekhar por 2nd kaj suru hbe avabe 1ta ses hole arekta kaj korai holo sync......

                    // what is async
// eksate sokol kaj suru kore , je kaj age ses hbe tar output dekhanoi holo async

// async code jegula =
        // fetch
        // XMLHttpRequest
        // axios
        // Promise
        // setTimeout
        // setInterval
        // agula bade sob sync
                            // example of async
// console.log("this will be executed 1st")
// setTimeout(() => {
//     console.log('2s latter I am executed')
// }, 2000);
// console.log("2nd executed")

// ****************************************
        // fetch
        // XMLHttpRequest
        // axios
        // Promise
        // setTimeout
        // setInterval
        // agula bade sob sync
// agulo dia server ba 3rd party er kase request patano hoy
    // request patanor por output dekhanor kaj kore : 
    // 1. then/catch
    // 2. callbacks
    // 3. async await

                        // Promise
// new Promise ((res ,rej )=>{
//     var n = Math.floor(Math.random()*10);
//     if (n <5){
//         return res();
//     }else{
//         return rej()
//     }
// })

// .then(function(){
//     console.log(" 5 er soto")
// })
// .catch(function(){
//     console.log("5 er boro")
// })

// Promise er arek rokom use
// kaj = 1. bari jaite hbe 2.tala khulte hbe 3.room a dukte hbe
// ei kaj gulake promise dia likte hbe 
                        // code
// var a = new Promise(function(res,rej){
//     return res("bari assi")

// })
// kaj2 = a.then(function(firstFtask){
//     console.log(firstFtask)
//     return new Promise(function(res,rej){
//         return res("tala khula ses")
//     })
// })
// kaj3 = kaj2.then(function(task2){
//     console.log(task2)
//     return new Promise(function(res,rej){
//         return res("room a duklam")

//     })
// })

// kaj3.then(function(task3){
//     console.log(task3)
// })

// *******************the use of async await*************************************
// function delay() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("my work is finished after 3s");
//         }, 3000);
//     });
// }

// async function testAwait() {
//     console.log("work start");

//     let result = await delay(); // ৩ সেকেন্ড অপেক্ষা করবে
//     console.log(result);

//     console.log("end");
// }

// testAwait();
// console.log("I am working another work");
