<?php

require_once ('database.php');

header('Access-Control-Allow-Origin: *');

$submit=$pdo -> prepare("SELECT `résultat` FROM `calculs`");
$submit -> execute();
$results = $submit -> fetchAll();

var_dump ($results);

echo json_encode ($results);