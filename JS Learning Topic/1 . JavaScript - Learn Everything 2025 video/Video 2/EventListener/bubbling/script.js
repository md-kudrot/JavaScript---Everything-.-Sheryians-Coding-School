const ui = document.querySelector("ul")

ui.addEventListener("click",(dtls)=>{
    // dtls.target.style.textDecoration = "line-through"
    // dtls.target.classList.add("tl")
    dtls.target.classList.toggle("tl")
})