var hiperlinks = document.getElementById("acordion").getElementsByTagName("a");

for(var i = 0;  i < hiperlinks.length; i++){
	hiperlinks[i].addEventListener("click", listener);
}

function listener(){
	var id = this.id.substring(2);
	var paragrafo = document.getElementById(id);
	if(paragrafo.style.display == "" || paragrafo.style.display == "none"){
		paragrafo.style.display = "block";
	}else{
		paragrafo.style.display = "none";
	}
}



















function duplicar(numero){
	return numero*2;
}

var teste = duplicar(50);

console.log(teste);
console.log(duplicar(teste));

var carro = {
	cor: "amarelo",
	start: function() {
		console.log("Vrummmm!");
	},
	motor :  {
		cilindrada: 1300,
		combustivel: "gasolina"

	}
};


carro.start();
console.log(carro);
*/