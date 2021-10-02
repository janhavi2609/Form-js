function ValidateEmail(){
	const email = document.getElementById("email").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.match(mailformat)){
		receipt();
	}
	else{
		alert("Invalid email address!");
	}
}

function receipt(){
	const name = document.getElementById("namey").value;
	const email = document.getElementById("email").value;
	const address = document.getElementById("address").value;
	const tagline = document.getElementById("tagline").value;
	const deldate = document.getElementById("deldate").value;

	let date = new Date();

	alert("Hey, your order for " + name +" has been placed at " + date + ".\nThis is your receipt.\nEmail: " + email + "\nAddress: " + address + 
		"\nTagline: " + tagline + "\nDelivery Date: " + deldate + "\n\nThank you for shopping!<3")
}