/*
if (firstname!="" && lastname!="" && regno!="" && faculty!="" && number!="" && state!="" && localgovt!="")
	 {
	 	 if (document.getElementById("male").checked || document.getElementById("female").checked) 
	 	 {
	 	 	if (!isNAN(number)&& number<11) 
	 	 	{
	 	 		if (regno.length==15)
	 	 		 {
	 	 		 	alert("All entered value are valied-Form succesfully validated");
	 	 		 	return true;
	 	 		 } 
	 	 			else 
	 	 			{
	 	 				alert("Enter valid Reg No");
	 	 				return false;
	 	 			}

	 	 	}
	 	 		else 
	 	 		{
	 	 			alert("Enter Number");
	 	 			return false;
	 	 		}

	 	 }
	 	 else{
	 	 	alert("Please select gender");
	 	 	return false;
	 	 }
	}
	else
	{
		alert("All fields are required");
		return false;
	}

}
*/
//validation function
function Validate(){
//getting all input text objects
var username = document.forms["Loginform"]["username"];
var password = document.forms["Loginform"]["password"];


//getting all error display objects
var username_error = document.getElementById("username_error");
var password_error = document.getElementById("password_error");

//setting all event listeners
username.addEventListener("blur", usernameVerify, false);
password.addEventListener("blur", passwordVerify, false);

	//username validation
	 if (username.value=="") {
	 	username.style.border = "1px solid green";
	 	username_error.textContent = "username is required";
	 	username.focus();
	 	return false;
	 }
	 //password validation
	 if (password.value=="") {
	 	password.style.border = "1px solid green";
	 	password_error.textContent = "password is required";
	 	password.focus();
	 	return false;
	 }
}

//event handler functions
function usernameVerify(){
	 if (username.value!="") {
	 	username.style.border="1px solid #669999";
	 	username_error.innerHTML="";
	 	return true;
	 
	}
}
function passwordVerify(){
	 if (password.value!="") {
	 	password.style.border="1px solid #669999";
	 	password_error.innerHTML="";
	 	return true;
	 }
}
