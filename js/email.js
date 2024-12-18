import { emailValidation } from "./external.js";
document.getElementById("mail").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    
    document.getElementsByClassName("dis").innerHTML=emailValidation(e.target.value);
})