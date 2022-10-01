
let firstNameStatus = false;
let lastNameStatus = false;
let emailStatus = false;
let passwordStatus = false;
let confirmPasswordStatus = false;
let tNCStatus = false;

let firstNameFunction = () => {
   let firstName =  document.getElementById("firstNameId").value;
   console.log(firstName)

   if(firstName.length>=3)
   {
    document.getElementById('firstName-valid').style.display= "block";
    document.getElementById('firstName-invalid').style.display= "none";
    firstNameStatus = true;
   }
   else
   {
    document.getElementById('firstName-valid').style.display= "none";
    document.getElementById('firstName-invalid').style.display= "block";
    firstNameStatus = false;
   }

}


let lastNameFunction = () => {
    let lastName =  document.getElementById("lastNameId").value;
    console.log(lastName)
 
    if(lastName.length>=3)
    {
     document.getElementById('lastName-valid').style.display= "block";
     document.getElementById('lastName-invalid').style.display= "none";
     lastNameStatus = true;
     
    }
    else
    {
     document.getElementById('lastName-valid').style.display= "none";
     document.getElementById('lastName-invalid').style.display= "block";
     lastNameStatus = false;
    }
 
 }


 let emailIdFunction = () => {
     emailStatus = false;


    let email =  document.getElementById("emailId").value;
    console.log(email)

    if(email!="")
    {
        if(email.includes('@')&& email.includes('.'))
        {
            let lastIndexOfDot = email.lastIndexOf('.');
            let tempString = email.slice(lastIndexOfDot)
            console.log(`temp string is ${tempString}`)
            if(tempString.length>=3)
            {
                if(email.charAt(0)!='@')
                {
                    emailStatus=true;
                }
            }
            
        }
    }

 
    if(emailStatus)
    {
     document.getElementById('email-valid').style.display= "block";
     document.getElementById('email-invalid').style.display= "none";
     emailStatus=true;
    }
    else
    {
     document.getElementById('email-valid').style.display= "none";
     document.getElementById('email-invalid').style.display= "block";
     emailStatus=false;
    }
 }



 let passwordFunction = () => {
    let password =  document.getElementById("password-id").value;
    console.log(password);

     passwordStatus = false;

    if(password.length >= 8)
    {
        if(password.includes('$') || password.includes('#') || password.includes('@'))
        {
            if(password.includes('0')||password.includes('1')||password.includes('2')||password.includes('3')||password.includes('4'))
            {
                passwordStatus = true;
            }
        }
    }

    
    if(passwordStatus)
    {
     document.getElementById('password-valid').style.display= "block";
     document.getElementById('password-invalid').style.display= "none";
     passwordStatus = true;
    }
    else
    {
     document.getElementById('password-valid').style.display= "none";
     document.getElementById('password-invalid').style.display= "block";
     passwordStatus = false;
    }
 }


 let confirmPasswordFunction = () => {
     confirmPasswordStatus = false;

    let password =  document.getElementById("password-id").value;
    let confirmPassword =  document.getElementById("confirmPasswordId").value;

    if(password===confirmPassword && confirmPassword!="")
        confirmPasswordStatus= true;

        if(confirmPasswordStatus)
        {
         document.getElementById('confirm-password-valid').style.display= "block";
         document.getElementById('confirm-password-invalid').style.display= "none";
         confirmPasswordStatus= true;
        }
        else
        {
         document.getElementById('confirm-password-valid').style.display= "none";
         document.getElementById('confirm-password-invalid').style.display= "block";
         confirmPasswordStatus= false;
        }

 }

 let tNCFunction  = () => {
     tNCStatus = false;

    let tNC = document.getElementById("tNCId").checked;
    tNCStatus = tNC;

    if(tNCStatus)
    {
     
     document.getElementById('invalid-tNC').style.display= "none";
    }
    else
    {
     
     document.getElementById('invalid-tNC').style.display= "block";
    }
 }

 let removeAllValidationText = () =>{
    document.getElementById('firstName-invalid').style.display= "none";
    document.getElementById('firstName-valid').style.display= "none";
    document.getElementById('lastName-invalid').style.display= "none";
    document.getElementById('lastName-valid').style.display= "none";
    document.getElementById('email-invalid').style.display= "none";
    document.getElementById('email-valid').style.display= "none";
    document.getElementById('password-invalid').style.display= "none";
    document.getElementById('password-valid').style.display= "none";
    document.getElementById('confirm-password-invalid').style.display= "none";
    document.getElementById('confirm-password-valid').style.display= "none";
    document.getElementById('invalid-tNC').style.display= "none";
 }

 let validateAllFunction = () => {
    firstNameFunction();
    lastNameFunction();
    emailIdFunction();
    passwordFunction();
    confirmPasswordFunction();
    tNCFunction();

    console.log(firstNameStatus)
    console.log(lastNameStatus)
    console.log(emailStatus)
    console.log(passwordStatus)
    console.log(confirmPasswordStatus)
    console.log(tNCStatus)
    if(firstNameStatus && lastNameStatus && emailStatus && passwordStatus && confirmPasswordStatus && tNCStatus)
    {
        alert('Your details have been saved successfully!')
        document.getElementById("form-id").reset();
        removeAllValidationText();

    }


 }