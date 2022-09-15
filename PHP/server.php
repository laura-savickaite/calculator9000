<?php
    require_once ('database.php');

    header('Access-Control-Allow-Origin: http://localhost:3000');
    var_dump("ouais");

    $content = trim(file_get_contents("php://input"));

    // $data = json_decode($content, true);

    var_dump($content);

    // $résultat = $data[""];

    $submit=$pdo -> prepare("INSERT INTO `calculs`(`résultat`) SET résultat=:résultat");
    $submit -> execute(['résultat' => $résultat]);

    echo 'ok';
?>