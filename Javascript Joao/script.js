

// Comentários
/*alert("Hello from javascript");*/
// Single - Line Comment
/*
// Mensagens na consola
console.log("Hello from console");
console.warn("This is a warning");
console.error("This is an error");

// Declaração de variáveis em Javascript
var aminhavar=5;
var aminhaoutravar=10;
var name="Bob";
var boolvar = "true";
var arrayvar = ["Bob" , "Joe" , "Sam"];

console.log(aminhavar);
console.log(aminhaoutravar);
console.log(typeof(aminhavar));
console.log(typeof(name));
console.log(typeof(boolvar));
console.log(typeof(arrayvar));

// Operadores Aritméticos

//Adição
console.log("Adição");
console.log(2+2);
console.log(2+aminhavar);
console.log(aminhavar + aminhaoutravar);

//Subtracção
console.log("Subtracção");
console.log(2-2);
console.log(2-aminhavar);
console.log(aminhavar - aminhaoutravar);

//Multiplicação
console.log("Multiplicação");
console.log(2*2);
console.log(2*aminhavar);
console.log(aminhavar * aminhaoutravar);

//Divisão
console.log("Divisão");
console.log(2/2);
console.log(2/aminhavar);
console.log(aminhavar / aminhaoutravar);

//Módulo
console.log("Módulo");
console.log(2%2);
console.log(2%aminhavar);
console.log(aminhavar % aminhaoutravar);

//Incremento
aminhavar++;
console.log("\nIncremento");
console.log(aminhavar);

//Decremento
aminhaoutravar--;
console.log("\nDecremento");
console.log(aminhaoutravar);

//Operadores de comparação
console.log(aminhavar>aminhaoutravar);
console.log(aminhavar<aminhaoutravar);
console.log(aminhavar>=aminhaoutravar);
console.log(aminhavar<=aminhaoutravar);

var num1 = 2;
var num2 = "2";
console.log(num1 == num2);
console.log(typeof num1);
console.log(typeof num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);


//Estruturas Condicionais
if (num1==num2) {
   console.log("Os valores são iguais.");
}else{
	console.log("Os valores não são iguais.");
}

//Exemplo Prático
/*
	Perguntar ao utilizador qual a cor preferida: Azul, Verde ou Vermelho
	Perguntar ao utilizador qual o animal preferido: Dragão, Leão ou Águia
	Mostrar mensagens diferentes em função das respostas: Força Porto, Força Sporting. Força Benfica
*/
/*
//Perguntar ao Utilizador
var resposta1, resposta2;
resposta1 = prompt("Qual é a tua cor preferida?" );
console.log(resposta1);
resposta2 = prompt("Qual é o teu animal preferido?");
console.log(resposta2);

resposta1 = resposta1.toLowerCase();
if (resposta1 == "azul" && resposta2 == "dragão"){
	document.write("<h1 style='color:#0000FF'>Força Porto!</h1>");
}else if(resposta1 == "verde" && resposta2 == "leão"){
	document.write("<h1 style='color:#0000FF'>Força Zbording");
}else if(resposta1 == "vermelho" || resposta2 == "águia"){
	document.write("<h1 style='color:#0000FF'>Força Benfica");
}else{
	document.write("<h1 style='color:#0000FF'>Força Javascript");
}


//Ciclos ou Repetições

var i = 0;

//Ciclo While
while(i<10){
	document.write("<p>Linha " + i + "</p>");
	i++;
}
do{
	document.write("<p>Linha " + i + "</p>");
	i++;
}while(i<10);

//Ciclo For 
for(var j = 0 ; j <= 10; j++); */


//Ler os valores das caixas de selecção
function desenhartabela(){
	var colunas, linhas;
	colunas = document.getElementById("colunas").value;
	linhas = document.getElementById("linhas").value;


//Desenhar a Tabela
	document.write("<table border=1>");

	for(var i = 0; i<linhas ; i++){
		document.write("<tr>");
			for(var j = 0; j<colunas ; j++){
				document.write("<td>" + j);
				document.write("</td>");
			}
		document.write("</tr>");
	
	document.write("</table");
	}

}
var btnDraw = document.getElementById("desenhar");
btnDraw.addEventListener("click", desenhartabela);




