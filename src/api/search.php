<?php

include("conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);



$funcionarios = [];


if($obj== ''){
    $sql1 = "SELECT * FROM freelancerr";
    $select = mysqli_query($con, $sql1);
}else{
    $profissao = $obj['profissao'];
    $municipio = $obj['municipio'];
    $regiao = $obj['regiao'];
    $idmesorregiao = $obj['idmesorregiao'];
    
    $parLikeProfissao = '%'.$profissao.'%';
    $parLikeMunicipio = '%'.$municipio.'%';
    $parLikeRegiao = '%'.$regiao.'%';
    $parLikeIdmesorregiao = '%'.$idmesorregiao.'%';

    $sql2 = "SELECT * FROM freelancerr WHERE profissao LIKE '$parLikeProfissao' AND municipio LIKE '$parLikeMunicipio' AND regiao LIKE '$parLikeRegiao' AND idmesorregiao LIKE '$parLikeIdmesorregiao'";

    $select = mysqli_query($con, $sql2);
}

for($linha = 0; $resultado = mysqli_fetch_assoc($select); $linha++){
    $funcionarios[$linha]['id'] = $resultado['id'];
    $funcionarios[$linha]['nome'] = $resultado['nome'];
    $funcionarios[$linha]['profissao'] = $resultado['profissao'];
    $funcionarios[$linha]['regiao'] = $resultado['regiao'];
    $funcionarios[$linha]['municipio'] = $resultado['municipio'];
    $funcionarios[$linha]['idmesorregiao'] = $resultado['idmesorregiao'];
}

if ($funcionarios == []){
    $idmesorregiao = $obj['idmesorregiao'];
    $parLikeIdmesorregiao = '%'.$idmesorregiao.'%';

    $sql2 = "SELECT * FROM freelancerr WHERE idmesorregiao LIKE '$parLikeIdmesorregiao'";
    $select = mysqli_query($con, $sql2);

    for($linha = 0; $resultado = mysqli_fetch_assoc($select); $linha++){
        $funcionarios[$linha]['id'] = $resultado['id'];
        $funcionarios[$linha]['nome'] = $resultado['nome'];
        $funcionarios[$linha]['profissao'] = $resultado['profissao'];
        $funcionarios[$linha]['regiao'] = $resultado['regiao'];
        $funcionarios[$linha]['municipio'] = $resultado['municipio'];
        $funcionarios[$linha]['idmesorregiao'] = $resultado['idmesorregiao'];
    }

}

echo json_encode($funcionarios);

?>