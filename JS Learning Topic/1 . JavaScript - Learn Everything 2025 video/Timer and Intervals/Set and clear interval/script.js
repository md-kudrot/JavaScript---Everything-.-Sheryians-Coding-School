let count = 10;

let interval = setInterval(()=>{
    if(count >=1){
        count --
        console.log(count)
    }else{
        clearInterval(interval)
    }
},1000)