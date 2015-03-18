/*** Open form onclick ****/

//var regexPat = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
//console.log(regexPat.test("dianamonteiro@email.com"));

var btnHello = document.getElementById("btn");
var btnSend = document.getElementById("btnsend");
var myForm = document.getElementsByTagName("form")[0];
var mySpan = document.getElementsByTagName("span")[0];
var myLabels = myForm.getElementsByTagName("label");
var myFields = [myForm.name, myForm.email, myForm.message];
var originalLabels = [
	myLabels[0].textContent.toString(),
	myLabels[1].textContent.toString(),
	myLabels[2].textContent.toString()
];
var myErrors = {
	errorName : "Preencha o seu nome.",
	errorMail : "Insira um email válido.",
	errorMessage : "Insira a sua mensagem.",

	mostrarErro: function(errorType){
		switch(errorType){
			case "name":
				return this.errorName;
				console.log(this);
				break;
			case "email":
				return this.errorMail;
				break;
			case "message":
				return this.errorMessage;
				break;
			default:
				return "Erro desconhecido.";
		}
	}

}


console.log(this);
console.log(myErrors.mostrarErro("name"));
console.log(myErrors.mostrarErro("email"));
console.log(myErrors.mostrarErro("message"));
console.log(myErrors.mostrarErro("mananana"));


btnHello.addEventListener("click", openForm);
btnSend.addEventListener("click", validateForm);

function openForm(){
	var myForm = document.getElementsByTagName("form")[0];
	console.log(myForm);
	if(myForm.style.display == "" || myForm.style.display == "none"){
		myForm.style.display = "block";
	}else{
		myForm.style.display = "none";
	}
}




function validateForm(evt){
	console.log(myFields);
	var validForm = true;
	for(var i=0; i< myFields.length; i++){
		if(myFields[i].value==""){
			myLabels[i].textContent = myErrors.mostrarErro(myFields[i].name);
			validForm = false;
		}else{
			if(i=1){
				if(){

				}
			}


			myLabels[i].textContent = originalLabels[i];
		}
	}






	if(!validForm){
		evt.preventDefault();
		console.log('Form Inválido!!!!!!!!!!!!!!!!');
	}else{
		validarEmail(evt);
	}
}

function validarEmail(evt){
	var validEmail = true;
	

	if(validEmail){
		var regexPat = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
		var email = myForm.email.value;
		validEmail = regexPat.test(email);

		console.log("Email válido");
		return true;
	}else{
		return false;
		console.log("Email inválido");
	}
}






/* Caso não tivesse feito o efeito hover/out no css este é o código javascript para isso */
/*
	btnHello.addEventListener("mouseover", changeSpan);
	btnHello.addEventListener("mouseout", changeSpan);
function changeSpan(oMeuEvento){
	if(oMeuEvento.type=="mouseover"){
		document.getElementsByTagName("span")[0].style.display="block";
	}else{
		document.getElementsByTagName("span")[0].style.display="none";
	}
}


function showSpan(){
	var mySpan = document.getElementByTagName("span")[];
	if(mySpan.style.display == "" || mySpan.style.display == "none"){
		mySpan.style.display = "block";
	}else{
		mySpan.style.display = "none";
	}
}



	myLabels[0].textContent += "Erro";

	if(myForm.name.value == ""){
		myLabels[0].textContent += "Erro";
		validForm = false;
	}
	if(myForm.email.value == ""){
		myLabels[1].textContent += "Erro";
		validForm = false;
	}
	if(myForm.message.value == ""){
		myLabels[2].textContent += "Erro";
		validForm = false;
	}
	 
*/