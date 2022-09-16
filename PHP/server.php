<?php
    require_once ('database.php');

    header('Access-Control-Allow-Origin: *');

    $content = trim(file_get_contents("php://input"));
    $data = json_decode($content, true);

    // var_dump($data);


    $submit=$pdo -> prepare("INSERT INTO `calculs`(`résultat`, `calcul`) VALUES (?, ?)");
    $submit -> execute([$data["résultat"], $data["calcul"]]);

    echo 'ok';
?>