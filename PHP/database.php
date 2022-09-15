<?php

//connexion à la database

class Database 
{
    protected static $instance = null;
    
    public static function getPdo()
    {
        if(self::$instance == null){

        try {
            
        self::$instance = new PDO('mysql:host=localhost;dbname=calculs;charset=utf8', 'root', '', [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);

        } catch (PDOException $e) {
            die('Erreur : ' .$e->getMessage());
        }
        
        }
        
        return self::$instance;
    }
}