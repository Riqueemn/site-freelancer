<?php

include("conexao.php");

$id = $_GET['id'];

$sql = "DELETE FROM funcionarios WHERE id = '$id'";

if(mysqli_query($con, $sql)){
    http_response_code(204);
}else{
    http_response_code(422);
}

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET");



?>