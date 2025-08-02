const password=document.querySelector("#password").textContent.toString();
const confirm_password=document.querySelector("#confirm_password").textContent.toString(); 
const button=document.querySelector("button");
button.addEventListener("click",()=>{
    const error=document.querySelector("#error-space");
    
    if (password==confirm_password){
        error.append(" ");
    }else {
        error.append("The password is not identical");
    }
});
