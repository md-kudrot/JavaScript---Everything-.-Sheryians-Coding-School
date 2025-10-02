const input = document.querySelector(".input")
const My_input = document.querySelector(".My_input")

My_input.addEventListener("click",()=>{
    input.click() // My_input er click take input a nia gelo js
})

input.addEventListener("change",(dtls)=>{
    
    My_input.textContent = `${dtls.target.value}`
})