const box = document.getElementById("box")

box.addEventListener("mouseover",()=>{
    box.style.backgroundColor = "green"
})
box.addEventListener("mouseout",()=>{
    box.style.backgroundColor = "red"
})

window.addEventListener("mousemove",(dtls)=>{
    box.style.top = dtls.clientY + "px"; 
    box.style.left = dtls.clientX + "px"; 
        
})

window.addEventListener("keypress",(kk) =>{
    console.log(kk.key)
})