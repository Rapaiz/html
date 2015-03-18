var imagemGrande = document.getElementById("imagemGrande");
var imagensPequenas = document.getElementById("imagens").getElementsByTagName("img");
var btnLeft = document.getElementById("btn_left");
var btnRight = document.getElementById("btn_right");
var imagensDiv = document.getElementById("imagens");
console.log(imagensPequenas.length);




btnLeft.addEventListener("mousedown", moverImagens);
btnRight.addEventListener("mousedown", moverImagens);
var right = 0;
var id;
btnLeft.addEventListener("mouseup", paraImagens);
btnRight.addEventListener("mouseup", paraImagens);

function paraImagens(){
	clearInterval(id);
}

function moverImagens(){
		if(this.id == "btn_left"){
			id = setInterval(function(){
				if(right<360){
					right = right + 2;
					imagensDiv.style.right = right + "px";
				}
			},10);
		}else{
			id = setInterval(function(){
				if(right>0){
					right = right - 2;
					imagensDiv.style.right = right + "px";
				}
			},10);
		}
}




	for (var i = 0; i<imagensPequenas.length; i++) {
		imagensPequenas[i].addEventListener("click", trocarImagem);

}

	function trocarImagem(){
		console.log(this);
		imagemGrande.src = this.src;
	}

/*
trocar src da imagem (ya bue simples)
imagemGrande.src = "img/santorini2.jpg";*/

