<?php

namespace App\Router;


use App\Controllers\AuthController;
use App\Controllers\PromotionController;

require __DIR__ . '/../Config/configRouter.php';

class Router
{

    public static function route($uri)
    {

        $method = $_SERVER['REQUEST_METHOD'];
        switch ($uri) {
            case URL_HOMEPAGE:
                $user = new AuthController();
                if ($method === 'GET') {
                    $user->homePage();
                }
                break;
            case URL_HOMEPAGE . 'checkmail':
                $user = new AuthController();
                if ($method === 'POST') {
                    $user->userEmail();
                }
                break;
            case URL_HOMEPAGE . 'confirmPassword':
                $user = new AuthController();
                if ($method === 'POST') {
                    $user->userConfirmPassword();
                }
                break;
            case URL_HOMEPAGE . 'login':
                $user = new AuthController();
                if ($method === 'POST') {
                    $user->userLogin();
                }
                break;
            case URL_HOMEPAGE . 'promo/accessPromo':
                $user = new PromotionController();
                if ($method === 'POST') {
                    $user->accessPromo();
                }
                break;
            case URL_HOMEPAGE . 'promo/accessCrudPromo':
                $user = new PromotionController();
                if ($method === 'POST') {
                    $user->accessCrudPromo();
                }
                break;
            case URL_HOMEPAGE . 'promo/displayPromo':
                $user = new PromotionController();
                if ($method === 'POST') {
                    $user->displayPromo();
                }
                break;
            case URL_HOMEPAGE . 'promo/editPromo':
                $user = new PromotionController();
                if ($method === 'POST') {
                    $user->editPromo();
                }
                break;
            case URL_HOMEPAGE . 'promo/createPromo':
                $user = new PromotionController();
                if ($method === 'POST') {
                    $user->createPromo();
                }
                break;
            case URL_HOMEPAGE . 'promo/deletePromo':
                $user = new PromotionController();
                if ($method === 'POST') {
                    $user->deletePromo();
                }
                break;

            default:
                header("HTTP/1.0 404 Not Found");
                require_once __DIR__ .  "/../Views/404.php";
                exit();
        }
    }
}
