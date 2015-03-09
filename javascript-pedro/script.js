// Comentários
/*
	alert("Hello from script.js!");
*/
// Single - line Comment

// Mensagens na consola
/*
console.log("Hello from console!");
console.warn("This is a warning.");
console.error("This is an error.");
console.info("This is an information.");

// Declaração de variáveis em Javascript
var aMinhaVar;
var aMinhaOutraVar = 5;
aMinhaVar = 10;
var name = 'Bob';
var boolVar = true;
var arrayVar = ['Bob', 'Joe', 'Sam'];

console.log(aMinhaVar);
console.log(aMinhaOutraVar);
console.log(typeof(aMinhaVar));
console.log(typeof(name));
console.log(typeof(boolVar));
console.log(typeof(arrayVar));

// Operadores Aritméticos
	
// Adição
console.log("\nAdição");
console.log(2+2);
console.log(aMinhaVar + 2);
console.log(aMinhaVar + aMinhaOutraVar);

// Subtração
console.log("\nSubtração");
console.log(2-2);
console.log(aMinhaVar - 2);
console.log(aMinhaVar - aMinhaOutraVar);

// Multiplicação
console.log("\nMultiplicação");
console.log(2*2);
console.log(aMinhaVar * 2);
console.log(aMinhaVar * aMinhaOutraVar);

// Divisão
console.log("\nDivisão");
console.log(2/2);
console.log(aMinhaVar / 2);
console.log(aMinhaVar / aMinhaOutraVar);

// Módulo
console.log("\nMódulo");
console.log(5%2);
console.log(5/2);

// Incremento
aMinhaVar++;
console.log("\nIncremento");
console.log(aMinhaVar);

// Decremento
aMinhaOutraVar--;
console.log("\nDecremento");
console.log(aMinhaOutraVar);

// Operadores de Comparação
console.log(aMinhaVar>aMinhaOutraVar);
console.log(aMinhaVar<aMinhaOutraVar);
console.log(aMinhaVar>=aMinhaOutraVar);
console.log(aMinhaVar<=aMinhaOutraVar);

var num1 = 2;
var num2 = "23";
console.log(num1 == num2);
console.log(typeof num1);
console.log(typeof num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

// Estruturas Condicionais
if (num1==num2) {
	console.log("Os valores são iguais.");
}else{
	console.log("Os valores não são iguais.");
}
// Exemplo Prático
/*
	Perguntar ao utilizador qual a cor preferida
	Azul, Verde ou Vermelho
	Perguntar ao utilizador qual o animal preferido
	Dragão, Leão ou Águia
	Mostrar mensagens diferentes em função das respostas
	Força Porto, Força Sporting ou Força Benfica ou Força Javascript.
*/
// Perguntar ao utilizador.
/*
var resposta1, resposta2;
resposta1 = prompt("Qual é a tua cor preferida? Azul, Verde ou Vermelho?");
console.log(resposta1);
resposta2 = prompt("Qual é o teu animal preferido? Dragão, Leão ou Águia?");
console.log(resposta2);

resposta1 = resposta1.toLowerCase();
resposta2 = resposta2.toLowerCase();
// Múltiplos caminhos alternativos
if (resposta1 == "azul" && (resposta2 == "dragão"|| resposta2 == "dragao")) {
	document.write("<h1 style='color:#00f'>Força Porto!</h1>");
}else if(resposta1 == "verde" && resposta2 == "leão"){
	document.write("<h1 style='color:#0f0'>Força Sporting!</h1>");
}else if(resposta1 == "vermelho" || resposta2 == "águia"){
	document.write("<h1 style='color:#f00'>Força Benfica!</h1>");
}else{
	document.write("<h1 style='color:#ff6103'>Força Javascript!</h1>");
}
*/
// Ciclos ou Repetições

// Ciclo While
/*
var  i = 0;
while(i<10){
	document.write("<p>Linha " + i + ".</p>");
	i++;
}
do{
	document.write("<p>Linha " + i + ".</p>");
	i++;
}while(i<10);
// Ciclo For
/*
for (var j = 0  ; j <= 10; j++) {
	document.write("<p>Linha " + j + ".</p>");
}*/
var btnDraw = document.getElementById("desenhar");
btnDraw.addEventListener("click", desenharTabela);

	function desenharTabela(){
		//Ler os valores das caixas de seleção
		var colunas, linhas, celulas;
		celulas = 1;
		colunas = document.getElementById("colunas").value;
		linhas = document.getElementById("linhas").value;
		console.log("Colunas:" + colunas);
		console.log("Linhas:" + linhas);
		//Desenhar Tabela
		document.write("<table border=1>");

			for(var i = 0; i<linhas ; i++){
				document.write("<tr>");
					for(var j = 0; j<colunas ; j++){
						document.write("<td>" + celulas);
						document.write("</td>");
						celulas++;
					}
				document.write("</tr>");
			}


		document.write("</table>");
	}
	
	
	
