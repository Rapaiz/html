/*
alert('Hello world');
*/

/*
//Mensagens na consola
console.log("Hello world");


//declaração de variáveis
var aMinhaVar;

var aMinhaOutraVar = 5;

var aMinhaVar=10;

var name = 'Bob';

var boolvar = true;

var arrayVar = ['Bob', 'Joe', 'Sam'];

console.log(aMinhaVar);
console.log(name);
console.log(typeof(aMinhaVar));
console.log(typeof(name));
console.log(typeof(boolvar));
console.log(typeof(arrayVar));


//operadores aritméticos

	//Adição
	console.log("\nAdição");
	console.log(2+2);
	console.log(aMinhaVar + 2);
	console.log(aMinhaVar + aMinhaOutraVar);

	//Subtração
	console.log("\nSubtração");
	console.log(2-2);
	console.log(aMinhaVar - 2);
	console.log(aMinhaVar - aMinhaOutraVar);
	
	//Multiplicando
	console.log("\nMultiplicação");
	console.log(2*2);
	console.log(aMinhaVar * 2);
	console.log(aMinhaVar * aMinhaOutraVar);

	//Divisão
	console.log("\nDivisão");
	console.log(2/2);
	console.log(aMinhaVar / 2);
	console.log(aMinhaVar / aMinhaOutraVar);


	//Módulo
	console.log("\nMódulo");
	console.log(5%2);
	console.log(aMinhaVar % 2);
	console.log(aMinhaVar % aMinhaOutraVar);


	//Incremento
	aMinhaVar++;
	console.log(aMinhaVar);

	//Decremento
	aMinhaVar--;
	console.log("\nDecremento");
	console.log(aMinhaOutraVar);

	//Operadores de Comparação
	console.info(aMinhaVar>aMinhaOutraVar);
	console.info(aMinhaVar<aMinhaOutraVar);
	console.info(aMinhaVar>=aMinhaOutraVar);
	console.info(aMinhaVar<=aMinhaOutraVar);


	var num1 = 2;
	var num2 = "2";
	console.log(num1 == num2);
	console.log(typeof num1);
	console.log(typeof num2);
	console.log(num1 === num2);
	console.log(num1 != num2);
	console.log(num1 !== num2);


	//Estruturas condicionais

	if(num1==num2){
		console.log("Os valores são iguais.");
	}else{
		console.log("Os valores são diferentes.");
	}



//Exemplo prático
/*Perguntar ao utilizador qual a cor preferida 
	Azul, verde ou vermelho
	Perguntar ao utilizador qual o animal preferido 
	Dragão, Leão ou Águia
	Mostrar mensagens diferentes em função das respostas
	Força Porto, Força Sporting, Força Benfica ou Força Javascript
*/



//perguntar ao utlizador
	/*var resposta1, resposta2;

	resposta1 = prompt("Qual é a tua cor preferida?");
	console.log(resposta1);

	resposta2 = prompt("Qual o animal preferido?");
	console.log(resposta2);

	resposta1 = resposta1.toLowerCase();
	resposta2 = resposta2.toLowerCase();

	if(resposta1=="azul" && resposta2=="dragão"){
		document.write("<h1 style='color:#0000FF'>Força Porto</h1>");
	}else if(resposta1=="verde" && resposta2=="leão"){
		document.write("<h1 style='color:#00FF00'>Força Sporting</h1>");
	}else if(resposta1=="vermelho" || resposta2=="águia"){
		document.write("<h1 style='color:#FF0000'>Força Benfica</h1>");
	}else{
		document.write("<h1 style='color:#330019'>Força Javascript</h1>");
	}
	
*/

//ciclos ou repetições

//ciclo do while
/*	var i=0;

	while(i<100){
		document.write("<p>Linha" + i + ".</p>");
		i++;
	}


//ciclo do for
	for(var j = 0; j <= 10; j++){
		document.write("<p>Linha" + j + ".</p>");
	}
*/



var btnDraw = document.getElementById("desenhar");
btnDraw.addEventListener("click", desenhartabela);


function desenhartabela(){
	var colunas, linhas;
	colunas = document.getElementById("colunas").value;
	linhas = document.getElementById("linhas").value;
	console.log(linhas);
	console.log(colunas);

	//desenhar tabelas
	document.write("<table border=1>");
		for(var i = 0; i<linhas ; i++){
			document.write("<tr>");
				for(var j = 0; j<colunas ; j++){
					document.write("<td>");
					document.write("</td>");
				}
			document.write("</tr>");
		}

	document.write("</table>");

}