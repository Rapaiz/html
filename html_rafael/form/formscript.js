

var btnHello = document.getElementById("btnHello");
var btnSend = document.getElementById("btnSend");
var form = document.getElementsByTagName("form")[0];
var span = document.getElementsByTagName("span")[0];
var myLabels = form.getElementsByTagName("label");
var myLabelsOriginalText = [
							myLabels[0].textContent.toString(),
							myLabels[1].textContent.toString(),
							myLabels[2].textContent.toString()
						];

var myFields = [form.name, form.email, form.message];

var myErros = {
	errorName: "Preencha o seu nome.",
	errorEmail: "Insira o seu email.",
	errorMessage: "Insira uma mensagem.",

	mostrarErro: function(errorType){
		switch(errorType){
			case "name" :
			console.log(this);
				return this.errorName;
				break;
			case "email" :
				return this.errorEmail;
				break;
			case "message" :
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
	for (var i = 0; i < myFields.length; i++) {
		if (myFields[i].value == ""){
			myLabels[i].textContent = myLabelsOriginalText[i] + " *" + myErros.mostrarErro(myFields[i].name);
		validForm = false;
		}else {
				//chamar email
				if (i==1) {
					if(validarEmail(myFields[1].value)){
						myLabels[i].textContent = "Email Inválido";
					}
				}
			myLabels[i].textContent = myLabelsOriginalText[i];
		}
	}
	if (!validForm) {
		evt.preventDefault();
		console.log('Form Inválido');
	}else{
		validarEmail(evt);
	}
}

function validarEmail(email){
	var regexPat = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
	var validEmail = regexPat.test(email);
	
	if (validEmail) {
		return true;
	}else{
		return false
	}
}

function openForm(){
	if (form.style.display == "" || form.style.display == "none") {
		form.style.display = "block";
	}else{
		form.style.display = "none";
	}
}

function changeSpan(oMeuEvento){
	if(oMeuEvento.type=="mouseover"){
		span.style.opacity=1;
	}else{
		span.style.opacity=0;
	}
}
