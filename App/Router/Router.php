<?php

namespace App\Router;


use App\Controllers\UserController;

require __DIR__ . '/../Config/configRouter.php';

class Router
{

    public static function route($uri)
    {

        $method = $_SERVER['REQUEST_METHOD'];
        switch ($uri) {
            case URL_HOMEPAGE:
                $user = new UserController();
                if ($method === 'GET') {
                    $user->homePage();
                }
                break;




            default:
                header("HTTP/1.0 404 Not Found");
                require_once __DIR__ .  "/../Views/404.php";
                exit();
        }
    }
}
