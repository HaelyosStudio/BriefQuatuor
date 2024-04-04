<?php

namespace App\Models\Repositories;

use App\Class\Database;
use App\Services\SQLRequest;

final class CoursRepository extends Database
{
    // params


    // contructor
    public function __construct()
    {
        parent::__construct();
    }

    // CRUD
    use SQLRequest;
}
