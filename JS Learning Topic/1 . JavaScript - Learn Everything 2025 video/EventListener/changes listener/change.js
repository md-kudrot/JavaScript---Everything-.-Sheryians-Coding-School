const select = document.querySelector("#select")
const head = document.querySelector("#head")

select.addEventListener("change",(kk)=>{
    head.textContent = `${kk.target.value} is selected`
})