 
function checkForm(){

    var error=false; //to znaczy, że danych nie brakuje
     var errorText=""; //komunikat z błędem
    var contactName = document.getElementById("contactName");
    var contactSurname = document.getElementById("contactSurname");
    var contactEmail = document.getElementById("contactEmail");
    var Info = document.getElementById("Info");

    if (contactName.value == ""){
       // errorText += "imię\n";
       document.getElementById("errorName").className="alert alert-danger"; 
        error=true;
        } 

   if (contactSurname.value == ""){
      // errorText += "Nazwisko\n";
      document.getElementById("errorSurname").className="alert alert-danger"; 
        error=true;
        } 
    

   if (contactEmail.value == ""){
    // errorText += "email\n";
    document.getElementById("errorEmail").className="alert alert-danger"; 
      error=true;
      }

     if (Info.value == ""){
        // errorText += "Info\n";
        document.getElementById("errorInfo").className="alert alert-danger"; 
          error=true;
      }            



      if(contactEmail.value == ""){
        errorText += "email\n";
        error=true;
       } else
       {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false)
        {
            document.getElementById("errorEmail2").className="alert alert-danger"; 
        error=true;
        }
       } 

       if (!error) return true; else{
        //   alert ("Nie wypełniłeś następujących pól:\n" + errorText);
            return false;
         } 
}
