/*var pOpenMundo = document.getElementById("a_mundo");
var pOpenPolitica = document.getElementById("a_politica");
var pOpenEconomia = document.getElementById("a_economia");


pOpenMundo.addEventListener('click', function() {
    document.getElementById("mundo").style.display = "block";
}, false);



pOpenPolitica.addEventListener('click', function() {
    document.getElementById("politica").style.display = "block";
}, false);


pOpenEconomia.addEventListener('click', function() {
    document.getElementById("economia").style.display = "block";
}, false);
*/

/*var hiperlink = document.getElementById("a_mundo");
var paragrafo = document.getElementById("mundo");*/
var hiperlinks = document.getElementById("wrapper").getElementsByTagName("a");
for(var i=0; i<hiperlinks.length; i++){
	hiperlinks[i].addEventListener("click", listener);
}

function listener(){
	var id = this.id.substring(2);
	var paragrafo = document.getElementById(id);
	if(paragrafo.style.display=="" || paragrafo.style.display=="none"){
		paragrafo.style.display="block";
	}else{
		paragrafo.style.display="none";
	}
}









