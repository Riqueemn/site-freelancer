<?php
include("conexao.php");

$funcionarios = [];

$sql = "SELECT * FROM funcionarios";

if($select = mysqli_query($con, $sql)){
    for($linha = 0; $resultado = mysqli_fetch_assoc($select); $linha++){
        $funcionarios[$linha]['id'] = $resultado['id'];
        $funcionarios[$linha]['pnome'] = $resultado['pnome'];
        $funcionarios[$linha]['unome'] = $resultado['unome'];
        $funcionarios[$linha]['email'] = $resultado['email'];
    }

    echo json_encode($funcionarios);

}else{
    http_response_code(404);
}

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Content-Type: application/json; charset=UTF-8");


?>