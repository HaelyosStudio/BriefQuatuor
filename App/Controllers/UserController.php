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
        $this->render('home');
    }

    public function userEmail()
    {
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
