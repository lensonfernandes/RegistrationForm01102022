


let firstNameFunction = () => {
   let firstName =  document.getElementById("firstNameId").value;
   console.log(firstName)

   if(firstName.length>=3)
   {
    document.getElementById('firstName-valid').style.display= "block";
    document.getElementById('firstName-invalid').style.display= "none";
   }
   else
   {
    document.getElementById('firstName-valid').style.display= "none";
    document.getElementById('firstName-invalid').style.display= "block";
   }

}


let lastNameFunction = () => {
    let lastName =  document.getElementById("lastNameId").value;
    console.log(lastName)
 
    if(lastName.length>=3)
    {
     document.getElementById('lastName-valid').style.display= "block";
     document.getElementById('lastName-invalid').style.display= "none";
    }
    else
    {
     document.getElementById('lastName-valid').style.display= "none";
     document.getElementById('lastName-invalid').style.display= "block";
    }
 
 }


 let emailIdFunction = () => {
    let emailStatus = false;


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
    }
    else
    {
     document.getElementById('email-valid').style.display= "none";
     document.getElementById('email-invalid').style.display= "block";
    }
 }



 let passwordFunction = () => {
    let password =  document.getElementById("password-id").value;
    console.log(password);

    let passwordStatus = false;

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
    }
    else
    {
     document.getElementById('password-valid').style.display= "none";
     document.getElementById('password-invalid').style.display= "block";
    }
 }


 let confirmPasswordFunction = () => {
    let confirmPasswordStatus = false;

    let password =  document.getElementById("password-id").value;
    let confirmPassword =  document.getElementById("confirmPasswordId").value;

    if(password===confirmPassword)
        confirmPasswordStatus= true;

        if(confirmPasswordStatus)
        {
         document.getElementById('confirm-password-valid').style.display= "block";
         document.getElementById('confirm-password-invalid').style.display= "none";
        }
        else
        {
         document.getElementById('confirm-password-valid').style.display= "none";
         document.getElementById('confirm-password-invalid').style.display= "block";
        }

 }

 let tNCFunction  = () => {
    let tNCStatus = false;

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