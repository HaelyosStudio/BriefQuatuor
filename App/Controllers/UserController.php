<?php

namespace App\Controllers;


use App\Models\Repositories\UsersRepository;

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
        $csrfRegister = $this->createCSRFToken('CSRFRegister');
        $viewData = ['CSRFRegister' => $csrfRegister];
        $this->render('home', $viewData);
    }

    public function userEmail()
    {
        if ($this->verifyCSRFToken($_POST['csrfRegister'], $_SESSION['csrfRegister'])) {
            if ($this->issetFormData($_POST)) {
                if ($this->notEmpty($_POST) === true) {
                    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) !== false) {
                        $email = $_POST['email'];
                    } else {
                        $error['mailFormat'] = 'Your email is not in the correct format';
                    }
                } else {
                    $error = [];
                    $error += $this->notEmpty($_POST);
                };

                if (!empty($error)) {
                    $csrfRegister = $this->createCSRFToken('csrfRegister');
                    $viewData = [
                        'csrfRegister' => $csrfRegister,
                        'error' => $error,
                        'etat' => false,
                    ];
                    http_response_code(400);
                    $response = json_encode($viewData);
                    header('Content-Type: application/json');
                    echo ($response);
                } else {
                    $emailSanitize = htmlentities($email);

                    $usersRepo = new UsersRepository();
                    if ($usersRepo->findOne('User', 'email', $emailSanitize)) {
                        $user = $usersRepo->findOne('User', 'email', $emailSanitize);
                        $_SESSION['user_id'] = $user->getId(); //VERIFIER LE GET DE LA CLASSE
                        $state = ['state' => true];
                        $response = json_encode($state);
                        header('Content-Type: application/json');
                        echo ($response);
                    };
                }
            }
        }
    }

    public function userConfirmPassword()
    {
        if ($this->verifyCSRFToken($_POST['csrfRegister'], $_SESSION['csrfRegister'])) {
            if ($this->issetFormData($_POST)) {
                if ($this->notEmpty($_POST) === true) {
                    if ($this->checkDoublePassword($_POST['password'], $_POST['confirmPassword']) !== false) {
                        $password = $_POST['password'];
                    }
                } else {
                    $error['password'] = 'Your passwords are not identical';
                }
            } else {
                $error = [];
                $error += $this->notEmpty($_POST);
            };

            if (!empty($error)) {
                $csrfRegister = $this->createCSRFToken('csrfRegister');
                $viewData = [
                    'csrfRegister' => $csrfRegister,
                    'error' => $error,
                    'etat' => false,
                ];
                $response = json_encode($viewData);
                header('Content-Type: application/json');
                echo ($response);
            } else {
                $passwordHashed = $this->passwordHash($password);

                $usersRepo = new UsersRepository();
                $setColumnsData = ["password" => $passwordHashed, "active" => 1];
                $usersRepo->update('User', $setColumnsData, $_SESSION['user_id']);
                $state = ['etat' => true];
                $response = json_encode($state);
                header('Content-Type: application/json');
                echo ($response);
            }
        }
    }

    public function userLogin()
    {
        if ($this->verifyCSRFToken($_POST['csrfRegister'], $_SESSION['csrfRegister'])) {
            if ($this->issetFormData($_POST)) {
                if ($this->notEmpty($_POST) === true) {
                    $usersRepo = new UsersRepository();
                    if ($usersRepo->findOne('User', 'email', $_SESSION['email'])) {
                        $user = $usersRepo->findOne('User', 'uuid', $_SESSION['user_id']);
                        if (password_verify($_POST['password'], $user->getPassword())) {
                            $_SESSION['authenticated_user'] = $user->getRoleId();
                            $state = ['state' => true];
                            $response = json_encode($state);
                            header('Content-Type: application/json');
                            echo ($response);
                        }
                    }
                } else {
                    $error['noUser'] = 'User not found';
                }
            } else {
                $error = [];
                $error += $this->notEmpty($_POST);
            };

            if (!empty($error)) {
                $csrfRegister = $this->createCSRFToken('csrfRegister');
                $viewData = [
                    'csrfRegister' => $csrfRegister,
                    'error' => $error
                ];
                $response = json_encode($viewData);
                header('Content-Type: application/json');
                echo ($response);
            }
        }
    }

    public function logout()
    {
        session_destroy();

        $state = ['state' => true];
        $response = json_encode($state);
        header('Content-Type: application/json');
        echo ($response);
    }
}
