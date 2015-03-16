var imagem = document.getElementById("imagemGrande");
var number = 1;
var id = setInterval(function(){
	if(number<4){
		number++;
	imagem.src = "img/"+ number +".jpg";
	}else{
		number = 0;
	}
}, 2000);
