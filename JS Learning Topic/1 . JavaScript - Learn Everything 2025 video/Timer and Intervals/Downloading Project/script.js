const progress_bar = document.querySelector("#progress_bar")
const increment = document.querySelector("#increment")
const dwnld = document.querySelector("#dwnld")

let count = 0;
const inter = setInterval(()=>{
    count++
    if(count <=100){
        progress_bar.style.width =`${count}%` ;
        increment.textContent = `${count}%`
    }else{
        clearInterval(inter)
        dwnld.textContent = "Downloaded";

    }
},9000/100)