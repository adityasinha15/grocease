// JavaScript Document
function mregister_validation()
{
 		   var letters = /^[A-Za-z]+$/;
		   var pass_length=document.myForm.password.value.length;
	        var phoneno =/^[0-9]+$/;
		   if(!document.myForm.fname.value.match(letters)){  // else for name check
                     	alert("Number not allowed in name");
                        return false;
		   }
		   if(!document.myForm.lname.value.match(letters)){  // else for name check
                     	alert("Number not allowed in name");
                        return false;
		   }
             if(!document.myForm.contact.value.match(phoneno))
                 {
                     	alert("Please enter 10 digit valid number");
                        return false;
		     	 }

          
			  return true;
		 
	
	
}
