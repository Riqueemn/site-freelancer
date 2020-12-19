<?php

include("conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$nome = $obj['nome'];
$profissao = $obj['profissao'];
$regiao = $obj['regiao'];
$municipio = $obj['municipio'];
$idmesorregiao = $obj['idmesorregiao'];

if($nome != '' && $profissao != '' && $municipio != '' && $idmesorregiao != ''){
    mysqli_query($con, "INSERT INTO freelancerr (nome, profissao, regiao, municipio, idmesorregiao) VALUES ('$nome', '$profissao', '$regiao', '$municipio', '$idmesorregiao')");
}


?>