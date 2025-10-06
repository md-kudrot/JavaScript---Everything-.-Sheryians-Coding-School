const form = document.querySelector("form")
const nm = document.querySelector("#name")
const right = document.querySelector("#right")
const mail = document.querySelector("#mail")
const mail_valid = document.querySelector("#mail_valid")
const password = document.querySelector("#password")
const pas_sms = document.querySelector("#pas_sms")
const showPws= document.querySelector("#showPws")



showPws.addEventListener("click",()=>{
    let typeValue = password.type;

    if(typeValue === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }

    // short from of this code
    // password.type = password.type === "password" ? "text" : "password";

})



form.addEventListener("submit", (dtls) => {
    // console.dir()
    dtls.preventDefault()
    if (nm.value.length <= 2) {
        right.style = "display: block; color: red;"        
    }else{
        right.style = "display: none;"
    }



    let check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    let test = check.test(mail.value)
    if(test){
        mail_valid.style = "display : none;"
    }else{
        mail_valid.style = "display : block; color: red;"
    }


    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let password_Check = passwordRegex.test(password.value) 
    
    if(password_Check){
        pas_sms.style = "display : none;"
    }else{
        pas_sms.style = "display : block; color: red;"
    }
})