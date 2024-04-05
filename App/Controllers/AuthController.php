<?php

namespace App\Controllers;


use App\Models\Repositories\UserRepository;

use App\Services\Response;
use App\Services\Constraints;
use App\Services\CSRFToken;
use App\Services\Sanitize;
use App\Services\IssetFormData;
use App\Services\Password;

final class AuthController
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

    public function isLogged()
    {
        if ($_SESSION['authenticate_user'] === false | $this->notEmpty($_SESSION['authenticate_user']) === false) {
            return false;
        } else {
            return true;
        }
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
                $_SESSION['email'] = $email;
                if ($userActive) {
                    $response = ['email_exists' => true, 'active' => true, 'email' => $email];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                } else {
                    $response = ['email_exists' => true, 'active' => false, 'email' => $email];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                }
            } else {
                $response = ['email_exists' => false, 'email' => $email];

                header('Content-Type: application/json');
                echo json_encode($response);
            }
        } else {
            $response = ['email_exists' => false, 'message' => 'Clé "email" manquante dans la requête'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }


    public function userConfirmPassword()
    {
        $rawBody = file_get_contents("php://input");

        $body = json_decode($rawBody, true);

        if ($this->issetFormData($body)) {
            $userRepo = new UserRepository();
            $email = $_SESSION['email'];
            $user = $userRepo->findOne('User', 'email', $email);
            $userId = $user->getUuid();
            if ($this->checkDoublePassword($body['registrationPassword'], $body['registrationConfirmPassword'])) {
                $hashedpassword = password_hash($body['registrationPassword'], PASSWORD_DEFAULT);
                if ($userRepo->updatePassword($hashedpassword, $userId)) {
                    $userRole = $userRepo->findRole($userId);
                    $_SESSION['role'] = $userRole['role'];
                    $response = ['success' => true, 'message' => 'update success', 'role' => $userRole['role']];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                } else {
                    $response = ['success' => false, 'message' => 'erreur when updating'];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                }
            } else {
                $response = ['success' => false, 'message' => 'password not identical'];
                header('Content-Type: application/json');
                echo json_encode($response);
            }
        } else {
            $response = ['success' => false, 'message' => 'Clé(s) manquante(s) dans la requête'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }

    public function userLogin()
    {
        $rawBody = file_get_contents("php://input");

        $body = json_decode($rawBody, true);

        if ($this->issetFormData($body)) {
            $userRepo = new UserRepository();
            $email = $_SESSION['email'];
            $passwordInput = $body['connectPassword'];
            $user = $userRepo->findOne('User', 'email', $email);
            $userPassword = $user->getPassword();
            if (password_verify($passwordInput, $userPassword)) {
                $_SESSION['authenticate_user'] = true;
                $userId = $user->getUuid();
                $userRole = $userRepo->findRole($userId);
                $_SESSION['role'] = $userRole['role'];
                $response = ['success' => true, 'role' => $userRole['role'], 'message' => 'connexion success'];
                header('Content-Type: application/json');
                echo json_encode($response);
            } else {
                $response = ['success' => false, 'message' => 'connexion error'];
                header('Content-Type: application/json');
                echo json_encode($response);
            }
        } else {
            $response = ['success' => false, 'message' => 'Clé(s) manquante(s) dans la requête'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }

    public function logout()
    {
    }
}
