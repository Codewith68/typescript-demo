/**
 * we want to define a common type for authentication forms 
 * this common type will take multiple getParameters
 * -name of the form 
 * -how to handel submission of the form 
 * -how to handle reset of the form 
 * -what should be the text og the submiting button 
 */

interface AuthForm{
    name:string,
    submitButtonText:string,
    onreset:(e:any)=>void,
    onsubmit:(e:any)=>void
}

let createUser:AuthForm={
    name:"subrat",
    submitButtonText:"Login",
    onreset:(e)=>{
        // some impl
    },
    onsubmit:(e)=>{
        // some impl
    }
}
console.log(createUser);
