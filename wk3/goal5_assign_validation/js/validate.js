/*
Name: Angelena Ward
Date: 01/21/2014
assignment: Goal 5 Assigntment: Validation 
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
		
		//An HTML form containing fields has been provided to you in the index.html file. 
		//The fields on the form are as follows:
        var name = document.getElementById("f_username"); 
        var email = document.getElementById("f_email");
        var phone = document.getElementById("f_phone");
        var ssn = document.getElementById("f_ssn");
        var password = document.getElementById("f_password");

        validateField(name);  //id = is the form input field ID
        validateField(email);
        validateField(phone);
        validateField(ssn);
        validateField(password);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){   

        if (inputName.name === "f_username"){  
            var pattern = /^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$/;
           
        }else if(inputName.name === "f_email"){    
          var pattern = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/;;
		  
        }else if(inputName.name === "f_phone"){  
           var pattern = /^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$/;
		   
        }else if (inputName.name === "f_ssn"){ 
           var pattern =  /^\d{3}-\d{2}-\d{4}$/;
		   
        }else if(inputName.name === "f_password"){   
          var pattern = /^[a-zA-Z]\w{4,15}$/;
        }
		
		// regex test code
        var pass = pattern.test(inputName.value);   
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;  
		
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper