<?php

namespace App\Controllers;

use App\Services\Constraints;
use App\Services\CSRFToken;
use App\Services\Sanitize;
use App\Services\IssetFormData;

final class ApprenantController
{
    // params

    // constructor
    public function __construct()
    {
    }

    // traits
    use Constraints;
    use CSRFToken;
    use Sanitize;
    use IssetFormData;
}