<?php
namespace App\Services;
trait Cors
{
    public function __construct()
    {

    }

    protected function handleCors()
    {
        header("Access-Control-Allow-Origin: * ");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }
}