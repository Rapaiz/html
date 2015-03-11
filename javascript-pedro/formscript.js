var btnHello = document.getElementById("btnHello");
var btnSend = document.getElementById("btnSend");
var myForm = document.getElementsByTagName("form")[0];
var mySpan = document.getElementsByTagName("span")[0];
var myLabels = myForm.getElementsByTagName("label");
var myLabelsOriginalText = [	myLabels[0].textContent.toString(),
								myLabels[1].textContent.toString(),
								myLabels[2].textContent.toString() ];					
var myFields = [myForm.name, myForm.email, myForm.message];
var myErros = {
	errorName: "Preencha o seu nome.",
	errorEmail: "Insira o seu email.",
	errorMessage: "Insira a sua mensagem.",
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
				break;
			default:
				return "Erro desconhecido.";
		}	
	}
}
btnHello.addEventListener("click", openForm);
btnHello.addEventListener("mouseover", changeSpan);
btnHello.addEventListener("mouseout", changeSpan);
btnSend.addEventListener("click", validateForm);

function validateForm(evt){
	var validForm = true;
	for(var i = 0;  i < myFields.length; i++){
		if (myFields[i].value == ""){
			myLabels[i].textContent = myErros.mostrarErro(myFields[i].name);
			validForm = false;
		}else{
			if(i==1){
				if(!validarEmail(myFields[1].value)){
					myLabels[1].textContent = "Email Inválido";
					validForm = false;
				}
			}
			myLabels[i].textContent = myLabelsOriginalText[i];
		}
	}
	if (!validForm) {
		evt.preventDefault();
		console.log('Form Inválido');
	}
}

function validarEmail(email){
	var regexPat = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
	return regexPat.test(email);
}

function openForm(){
	if (myForm.style.display == "" || myForm.style.display == "none") {
		myForm.style.display = "block";
	}else{
		myForm.style.display = "none";
	}
}
function changeSpan(oMeuEvento){
	if(oMeuEvento.type=="mouseover"){
		mySpan.style.opacity=1;
	}else{
		mySpan.style.opacity=0;
	}
}
