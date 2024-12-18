export function emailValidation(mail){
     let mailex= /^[A-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     console.log(mailex.test(mail));
     
     if(mailex.test(mail))
     {
        return `<span id="smsg">successful</span>`
     }
     else
     {
         return `<span id="nmsg">failed</span>`
     }
}