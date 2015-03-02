//comentários
/*
alert("Hello from script.js")
*/
//single - line content
/*
//mensagens na consola
console.log("Hello from script.js");
console.warn("This is a warning.");
console.error("This is an error.");
console.info("This is an information.");

//Declaração de variáveis em Javascript

var aMinhaVar;
var aMinhaOutraVar = 5;
aMinhaVar = 10;
var name= 'bob';
var boolvar = true;
var arrayVar = ['Bob', 'Joe', 'Sam'];
console.log(aMinhaVar);
console.log(aMinhaOutraVar);
console.log(typeof(aMinhaVar));
console.log(typeof(name));
console.log(typeof(boolvar));
console.log(typeof(arrayVar));

//operadores aritméticos

//adição
console.log("\nAdição");
console.log(2+2);
console.log(aMinhaVar+2);
console.log(aMinhaVar+aMinhaOutraVar);

//subtração
console.log("\nSubtração");
console.log(2-2);
console.log(aMinhaVar-2);
console.log(aMinhaVar-aMinhaOutraVar);

//multiplicação
console.log("\nMultiplicação");
console.log(2*2);
console.log(aMinhaVar*2);
console.log(aMinhaVar*aMinhaOutraVar);

//divisão
console.log("\nDivisão");
console.log(2/2);
console.log(aMinhaVar/2);
console.log(aMinhaVar/aMinhaOutraVar);

//módulo
console.log("\nMódulo");
console.log(5%2);

//incremento
aMinhaOutraVar++;
console.log("\nIncremento");
console.log(aMinhaOutraVar);

//decremento
aMinhaVar--;
console.log("\nDecremento");
console.log(aMinhaVar);

//operadores de comparação
console.log(aMinhaVar>aMinhaOutraVar);
console.log(aMinhaVar<aMinhaOutraVar);
console.log(aMinhaVar>=aMinhaOutraVar);
console.log(aMinhaVar<=aMinhaOutraVar);

var num1 = 2;
var num2 = "2";
//igual a
console.log("\nIgual a");
console.log(num1 == num2);
//estritamente igual a
console.log("\nEstritamente Igual a");
console.log(num1 === num2);
// diferente de
console.log("\ndiferente de");
console.log(num1 != num2);
//estritamente diferente de
console.log("\nEstritamente diferente de");
console.log(num1 !== num2);
//tipo de variavel de
console.log("\ntipo de variavel");
console.log(typeof num1);
console.log(typeof num2);

//estruturas condicionais
if (num1==num2) {
	console.log("Os valores são iguais.");
}else{
	console.log("Os valores são diferentes.");
}
//Exemplo prático
/*
	-Perguntar ao utilizador qual a cor preferida:
	Azul, Verde ou Vermelho
	-Perguntar ao utilizador qual o animal preferido:
	Dragão, Leão ou Águia
	-Mostrar mensagens diferentes em função das respostas:
	Força Porto, Força Sporting, Força Benfica ou  força javascript.

//Pergunta ao Utilizador.
var resposta1, resposta2;
resposta1 = prompt("Qual é a tua cor preferida? Azul, Verde ou vermelha?");
console.log(resposta1);
resposta2 = prompt("Qual é o teu animal preferido? Dragão, Leão ou Águia?");
console.log(resposta2);

resposta1 = resposta1.toLowerCase();
resposta2 = resposta2.toLowerCase();

//múltiplos caminhos alternativos
if (resposta1=="azul" && (resposta2=="dragão"|| resposta2=="dragao")) {
	document.write("<h1 style='color:#00f'>Força Porto!</h1>");
}else if (resposta1=="Verde" && resposta2=="Leão"|| resposta2=="leao")) {
	document.write("<h1 style='color:#0f0'>Força Sporting!</h1>");
}else if (resposta1=="vermelho" || resposta2=="águia" || resposta2=="aguia")) {
	document.write("<h1 style='color:#f00'>Força Benfica!</h1>");
}else{
	document.write("<h1 style='color:#ff6103'>Força Javascript!</h1>");
}


//Ciclos ou repetições

//cilo while
var i = 0;
while(i<10){
	document.write("<p>Linha " + i + ".</p>");
	i++;
}

do{
	document.write("<p>Linha " + i + ".</p>");
	i++;
}while(i>10);

//ciclo for
for (var j = 0; j <= 10; j++) {
	document.write("<p>Linha " + j + ".</p>");
}*/

function desenharTabela(){
	//ler os valores das caixas de seleção
	var colunas, linhas,celulas;
	celulas = 1;
	colunas = document.getElementById("colunas").value;
	linhas = document.getElementById("linhas").value;
	//desenhar tabela
	document.write("<table border=1>");

		for(var i = 0; i<linhas ; i++){
			document.write("<tr>");
				for(var j = 0; j<colunas ; j++) {
					document.write("<td>" + celulas);
					document.write("</td>");
					celulas++
				};
			document.write("</tr>");
		};

	document.write("</table>");
}

var btnDraw = document.getElementById("desenhar");
btnDraw.addEventListener("click", desenharTabela);