<?php

//connexion à la database

$host='localhost';
$user='root';
$password='';
$dbname='calculs';

$dsn='mysql:host='.$host.'; dbname='.$dbname.'; charset=utf8';

$pdo=new PDO($dsn, $user, $password);