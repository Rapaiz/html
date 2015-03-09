var btnHello = document.getElementById("btnHello");
var btnSend = document.getElementById("btnSend");
var form = document.getElementsByTagName("form")[0];
var span = document.getElementsByTagName("span")[0];
var myLabels = form.getElementsByTagName("label");
var myFields = [form.name, form.email, form.message];
btnHello.addEventListener("click", openForm);
btnHello.addEventListener("mouseover", changeSpan);
btnHello.addEventListener("mouseout", changeSpan);

btnSend.addEventListener("click", validateForm);
function validateForm(evt){
	var validForm = true;
	for (var i = 0; i < myFields.length; i++) {
		if (myFields[i].value == ""){
		myLabels[i].textContent += " Erro!";
		validForm = false;
		}
	}
	if (!validForm) {evt.preventDefault();}
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
