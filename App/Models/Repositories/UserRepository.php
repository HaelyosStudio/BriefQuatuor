<?php

namespace App\Models\Repositories;

use App\Class\Database;
use App\Services\SQLRequest;

final class UserRepository extends Database
{
    // params


    // contructor
    public function __construct()
    {
        parent::__construct();
    }

    public function findRole($userId)
    {
        $req = $this->getDb()->prepare('SELECT User.uuid, Role.name FROM User
        JOIN Role On User.role_id = Role.id
        WHERE User.uuid = :userId');

        $req->execute([
            'userId' => $userId
        ]);

        return $req->fetch();
    }

    // CRUD
    use SQLRequest;
}
