


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