var imagemGrande = document.getElementById("imagemGrande");
var imagensPequenas = document.getElementById("imagens").getElementsByTagName("img");
var btnLeft = document.getElementById("btn_left");
var btnRight = document.getElementById("btn_right");
var imagensDiv = document.getElementById("imagens");
var right = 0;

imagensDiv.style.right = "0px";

btnLeft.addEventListener("mousedown", moverImagens);
btnRight.addEventListener("mousedown", moverImagens);
btnLeft.addEventListener("mouseup", pararImagens);
btnRight.addEventListener("mouseup", pararImagens);
	
function pararImagens(){
	clearInterval(id);
}

function moverImagens(){	
	if(this.id == "btn_left"){
		id = setInterval(function(){
		if(right<360){
			right = right + 2;
			imagensDiv.style.right = right + "px";
		}
	}, 10);
	}else{
		id = setInterval(function(){
		if(right>0){
			right = right - 2;
			imagensDiv.style.right = right + "px";
		}
		}, 10);
	}


}




for (var i = 0; i < imagensPequenas.length; i++) {
	imagensPequenas[i].addEventListener("click", trocarImagem)
};


function trocarImagem(){
	imagemGrande.src = "img/santorini" + this.id.substring(4) + ".jpg";
}
 

