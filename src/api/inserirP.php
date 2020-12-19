<?php

include("conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$profissao = $obj['profissao'];


if($profissao != ''){
    mysqli_query($con, "INSERT INTO profissoes (nome) VALUES ('$profissao')");
}


?>