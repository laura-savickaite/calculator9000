<?php

require_once ('database.php');

header('Access-Control-Allow-Origin: *');

$submit=$pdo -> prepare("SELECT `calcul`,`résultat` FROM `calculs`");
$submit -> execute();
$results = $submit -> fetchAll(PDO::FETCH_ASSOC);

// var_dump ($results);
// foreach ($results as $result) {
//     // var_dump($result);
//     echo json_encode ($result);
// }

echo json_encode ($results);
