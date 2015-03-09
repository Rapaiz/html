var btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", openForm);

function openForm(){
	var form = document.getElementsByTagName("form")[0];
	if (form.style.display == "" || form.style.display == "none") {
		form.style.display = "block";
	}else{
		form.style.display = "none";
	}
}

btnHello.addEventListener("mouseover", changeSpan);
btnHello.addEventListener("mouseout", changeSpan);
function changeSpan(oMeuEvento){
	if(oMeuEvento.type=="mouseover"){
		document.getElementsByTagName("span")[0].style.opacity=1;
	}else{
		document.getElementsByTagName("span")[0].style.opacity=0;
	}
}

/**/