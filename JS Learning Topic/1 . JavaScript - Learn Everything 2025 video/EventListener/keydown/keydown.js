const store = document.querySelector("h1")

window.addEventListener("keydown",(kk)=>{
    if(kk.key === ' '){
        store.textContent = "spc"
    }else{

        store.textContent = `${kk.key}`
    }
})