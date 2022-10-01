


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