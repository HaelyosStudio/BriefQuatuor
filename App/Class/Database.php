<?php

namespace App\Class;

use Exception;
use PDO;
use PDOException;

abstract class Database
{
    // params
    private $db;

    // constructor
    public function __construct()
    {
        $this->connexionDB();
    }

    // methods
    private function connexionDB()
    {
        try {
            $dsn = "mysql:host=" . $_ENV['DB_HOST'] . ";dbname=" . $_ENV['DB_NAME'];
            $this->db = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASSWORD'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }

    public function getDB()
    {
        return $this->db;
    }


    public function initDB()
    {
        $sql = file_get_contents(__DIR__ . "/../SQL/initDB.sql");
        try {
            $request = $this->db->prepare($sql);
            $request->execute();
            return true;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
            return false;
        }
    }

    public function initData()
    {
        $sql = file_get_contents(__DIR__ . "/../SQL/initData.sql");
        try {
            $request = $this->db->prepare($sql);
            $request->execute();
            return true;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
            return false;
        }
    }
}
