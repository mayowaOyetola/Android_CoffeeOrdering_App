function valid() {
	//  declaration of all variables
	var firstname = document.getElementById("firstid").value;
	var lastname = document.getElementById("lastid").value;
	var regno = document.getElementById("regno").value;
	var faculty = document.getElementById("faculty").value;
	var number =parseInt(document.getElementById("number").value);
	var state = document.getElementById("state").value;
	var localgovt = document.getElementById("localgovt").value; 
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