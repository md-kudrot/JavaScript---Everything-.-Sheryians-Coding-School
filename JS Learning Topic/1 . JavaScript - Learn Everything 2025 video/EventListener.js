const input = document.getElementById("input")

input.addEventListener("input", (val) => {
    if (val.data !== null){
        console.dir(val.data)
    }
})