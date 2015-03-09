var hiperlinks = document.getElementById("acordion").getElementsByTagName("a");

for(var i = 0; i < hiperlinks.length; i++){
	hiperlinks[i].addEventListener("click", listener);
}

function listener(){
	var id = this.id.substring(2);
	var paragrafo = document.getElementById(id);
	if (paragrafo.style.display == "" || paragrafo.style.display == "none") {
		paragrafo.style.display = "block";
	}else{
		paragrafo.style.display = "none";
	}
}