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
            case URL_HOMEPAGE . '/checkemail':
                $user = new UserController();
                if ($method === 'POST') {
                    $user->userEmail();
                }
                break;
            case URL_HOMEPAGE . '/confirmPassword':
                $user = new UserController();
                if ($method === 'POST') {
                    $user->userConfirmPassword();
                }
                break;
            case URL_HOMEPAGE . '/login':
                $user = new UserController();
                if ($method === 'POST') {
                    $user->userLogin();
                }
                break;

            default:
                header("HTTP/1.0 404 Not Found");
                require_once __DIR__ .  "/../Views/404.php";
                exit();
                break;
        }
    }
}
