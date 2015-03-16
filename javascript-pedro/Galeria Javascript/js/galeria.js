var imagemGrande = document.getElementById("imagemGrande");
var imagensPequenas = document.getElementById("imagens").getElementsByTagName("img");
var btnLeft = document.getElementById("btn_left");
var btnRight = document.getElementById("btn_right");
var imagensDiv = document.getElementById("imagens");



btnLeft.addEventListener("mousedown", moverImagens);
btnRight.addEventListener("mousedown", moverImagens);
imagensDiv.style.right = "0px";

function moverImagens(){
	if(this.id == "btn_left"){
		if(parseInt(imagensDiv.style.right)<360){
			imagensDiv.style.right = parseInt(imagensDiv.style.right) + 20 + "px";
		}
	}else{
		if(parseInt(imagensDiv.style.right)>0){
			imagensDiv.style.right = parseInt(imagensDiv.style.right) - 20 + "px";
		}
	}
}

for(var i = 0; i < imagensPequenas.length; i++){
	imagensPequenas[i].addEventListener("click", trocarImagem)
}

function trocarImagem(){
	imagemGrande.src = "img/santorini" + this.id.substring(4) + ".jpg";
}

