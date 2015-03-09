var btnHello = document.getElementById("btnHello");
var btnSend = document.getElementById("btnSend");
var myForm = document.getElementsByTagName("form")[0];
var mySpan = document.getElementsByTagName("span")[0];

var myLabels = myForm.getElementsByTagName("label");
var myFields = [myForm.name, myForm.email, myForm.message];

btnHello.addEventListener("click", openForm);
btnHello.addEventListener("mouseover", changeSpan);
btnHello.addEventListener("mouseout", changeSpan);

btnSend.addEventListener("click", validateForm);

function validateForm(evt){
	var validForm = true;
	// Testar se campos estão vazios
	for(var i = 0;  i < myFields.length; i++){		
		if (myFields[i].value == ""){
			myLabels[i].textContent += " Erro!";
			validForm = false;
		}
	}
	// if (!validForm) é o mesmo que if(validForm == false)
	if (!validForm) {
		evt.preventDefault();
		console.log('Form Inválido');
	}  	
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
