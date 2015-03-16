

var btnSend = document.getElementById("btnSend");
var btnHello = document.getElementById("btnHello");
var myForm = document.getElementsByTagName("form")[0];
var mySpan = document.getElementsByTagName("span")[0];
var myLabels = myForm.getElementsByTagName("label");
var myFields = [myForm.name,myForm.email,myForm.message];
var myLabelsOriginalText = [	myLabels[0].textContent.toString(),
								myLabels[1].textContent.toString(),								
								myLabels[2].textContent.toString() ];
var myErros = {
	errorName:"Preencha o seu nome.",
	errorEmail: "Introduza um endereço de email válido.",
	errorMessage: "Introduza a sua mensagem.",


	mostrarErro: function(errorType){
		switch(errorType){
			case "name":
				console.log(this);
				return this.errorName;
				break;
			case "email":
				return this.errorEmail;
				break;
			case "message":
				return this.errorMessage;
			default:
				return "Erro desconhecido.";
		}
	}
}

btnHello.addEventListener("click", openForm);
btnHello.addEventListener("mouseover", changeSpan);
btnHello.addEventListener("mouseout", changeSpan);
btnSend.addEventListener("click", validateForm);

function validateForm(oMeuEvento){
	var validForm = true;

	for(var i = 0; i < myFields.length; i++){
		if (myFields[i].value == ""){
		myLabels[i].textContent = myErros.mostrarErro(myFields[i].name);
		validForm = false;
		}else{
			myLabels[i].textContent = myLabelsOriginalText[i];
		}
	}
	
	if (!validForm) 
		{oMeuEvento.preventDefault();
		console.log('Form Inválido');
	}else{
		validarEmail(evt);
	}
}

function validarEmail(evt){
	var validEmail = true;
	var regexPat = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
	var email = myForm.email.value;
	var validEmail = regexPat.test(email);


	if(validForm){
		console.log("Email válido");
		evt.preventDefault();
	

	}else{evt.preventDefault()};
			console.log("Email inválido");
}

function openForm(){
	if(myForm.style.display == "" || myForm.style.display == "none") {
		myForm.style.display = "block";
	}else{
		myForm.style.display = "none";
	}

}

function changeSpan(oMeuEvento){
	if(oMeuEvento.type == "mouseover"){
		mySpan.style.opacity=1;
	}else{
		mySpan.style.opacity=0;

	}

}


 




/*function showSpan(){
	var mySpan = document.getElementsByTagName("span")[0];
	if(mySpan.style.display == "" || mySpan.style.display == "none") {
		mySpan.style.display = "block";
	}else{
		mySpan.style.display = "none";
	}
}*/