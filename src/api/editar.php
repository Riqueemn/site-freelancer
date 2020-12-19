<?php


include("conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$id = $_GET['id'];
$pnome = $obj['primeiroNome'];
$unome = $obj['ultimoNome'];
$email = $obj['email'];

$sql = "UPDATE funcionarios SET pnome='$pnome', unome='$unome', email='$email' WHERE id='$id'";

if($pnome != '' && $unome != '' && $email != ''){
    if(mysqli_query($con, $sql)){
        http_response_code(204);
    }else{
        http_response_code(422);
    }
}

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Content-Type: application/json; charset=UTF-8");

?>