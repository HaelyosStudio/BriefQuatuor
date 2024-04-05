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
        $req = $this->getDb()->prepare('SELECT Role.name as role FROM User
        JOIN Role On User.role_id = Role.id
        WHERE User.uuid = :userId');

        $req->execute([
            'userId' => $userId
        ]);

        return $req->fetch();
    }

    public function updatePassword($password, $uuid)
    {
        $query = 'UPDATE User set password = :password, active = 1 WHERE uuid = :uuid';

        $req = $this->getDb()->prepare($query);

        $req->execute([
            'password' => $password,
            'uuid' => $uuid,
        ]);
        return true;
    }

    // CRUD
    use SQLRequest;
}
