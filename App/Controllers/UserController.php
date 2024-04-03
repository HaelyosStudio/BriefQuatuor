<?php

namespace App\Controllers;


use App\Models\Repositories\UserRepository;

use App\Services\Response;
use App\Services\Constraints;
use App\Services\CSRFToken;
use App\Services\Sanitize;
use App\Services\IssetFormData;
use App\Services\Password;

final class UserController
{
    // params

    // constructor
    public function __construct()
    {
    }

    // traits
    use Response;
    use Constraints;
    use CSRFToken;
    use Sanitize;
    use IssetFormData;
    use Password;


    public function homePage()
    {
        $this->render('home');
    }

    public function userEmail()
{
    $rawBody = file_get_contents("php://input");

    $body = json_decode($rawBody, true);

    if (isset($body['email'])) {
        $email = $body['email'];
        $userRepo = new UserRepository();
        if ($userRepo->findOne('User', 'email', $email)) {
            $user = $userRepo->findOne('User', 'email', $email);
            $userActive = $user->getActive();
            if($userActive) {
                $response = ['email_exists' => true, 'active' => true, 'email' => $email];
                header('Content-Type: application/json');
                echo ($response);
            } else {
                $response = ['email_exists' => true, 'active' => false, 'email' => $email];
                header('Content-Type: application/json');
                echo ($response);
            }
            
        } else {
            $response = ['email_exists' => false, 'email' => $email];
            header('Content-Type: application/json');
            echo ($response);
        }
    } else {
        $response = ['success' => false, 'message' => 'Clé "email" manquante dans la requête'];
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}


    public function userConfirmPassword()
    {
    }

    public function userLogin()
    {
    }

    public function logout()
    {
    }
}
