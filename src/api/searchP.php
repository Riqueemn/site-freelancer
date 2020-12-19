<?php

include("conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);



$funcionarios = [];


$sql = "SELECT * FROM profissoes";
$select = mysqli_query($con, $sql);


for($linha = 0; $resultado = mysqli_fetch_assoc($select); $linha++){
    $funcionarios[$linha]['id'] = $resultado['id'];
    $funcionarios[$linha]['nome'] = $resultado['nome'];
}

echo json_encode($funcionarios);

?>