<?php 
	$server='localhost';
	$username= 'root';
	$userpass='';
	$dbname='mobilier';
	$dbconn= new PDO("mysql:host=$server;dbname=$dbname", $username, $userpass);

    $dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	if (isset($_POST["inscrire"])) {
	$Nom=$_POST['nom'];
	$Prenom=$_POST['prenom'];
	$Email=$_POST['email'];
    $Tel=$_POST['tel'];
    $Password=$_POST['password'];
	$req=$dbconn->prepare( "INSERT INTO `inscription`(`Nom`, `Prenom`, `Email`, `Tel`, `Password`) VALUES ('$Nom','$Prenom','$Email','$Tel','$Password')");
    $req->execute();
	echo "enregistrement effectuer";
	}
 ?>