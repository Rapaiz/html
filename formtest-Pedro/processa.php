<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Processamento Formulário PHP</title>
</head>
<body>
	<?php 
	
	// phpinfo();

	echo "<h1>Hello World</h1>";
	
	var_dump($_GET);


	$nome = $_GET['nome'];
	$email = $_GET['email'];
	$idade = $_GET['idade'];
	$estciv = $_GET['estciv'];
	$desportos = $_GET['desportos'];
	$msg = $_GET['msg'];
	$pagam = $_GET['pagam'];

	$pagamentos= array("Paypal", "Cheque", "Contra-reembolso");
	//var_dump($pagamentos);

	echo "<p>O nome que inseriu é $nome.</p>";
	echo "<p>O email que inseriu é $email.</p>";	
	echo "<p>A idade que inseriu é $idade.</p>";
	echo "<p>O estado civil que inseriu é $estciv.</p>";	
	echo "<p>O(s) desporto(s) que escolheu é(são) $desportos.</p>";
	echo "<p>A mensagem que escreveu é: $msg.</p>";
	echo "<p>O pagamento que selecionou é $pagamentos[$pagam].</p>";		
	

 	?>
</body>
</html>
