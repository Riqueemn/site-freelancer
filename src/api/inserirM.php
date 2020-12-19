<?php

include("conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$nome = $obj['nome'];


if($nome != ''){
    mysqli_query($con, "INSERT INTO municipio (nome) VALUES ('$nome')");
}


?>