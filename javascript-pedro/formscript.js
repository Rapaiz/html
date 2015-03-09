var btnHello = document.getElementById("btnHello");
console.log(btnHello);
console.log(typeof btnHello);
btnHello.addEventListener("click", openForm);
function openForm(){
	var myForm = document.getElementsByTagName("form")[0];
	if (myForm.style.display == "" || myForm.style.display == "none") {
		myForm.style.display = "block";
	}else{
		myForm.style.display = "none";
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


/*
btnHello.addEventListener("mouseover", showSpan);
btnHello.addEventListener("mouseout", hideSpan);
function showSpan(){
	var mySpan = document.getElementsByTagName("span")[0];
		mySpan.style.display = "block";
}
function hideSpan(){
	var mySpan = document.getElementsByTagName("span")[0];
		mySpan.style.display = "none";
}
*/