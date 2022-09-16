<?php
    require_once ('database.php');

    header('Access-Control-Allow-Origin: *');

    $content = trim(file_get_contents("php://input"));

    // // $data = json_decode($content, true);

    $content = intval($content);

    // // $résultat = $data[""];

    $submit=$pdo -> prepare("INSERT INTO `calculs`(`résultat`) VALUES (?)");
    $submit -> execute([$content]);

    echo 'ok';
?>