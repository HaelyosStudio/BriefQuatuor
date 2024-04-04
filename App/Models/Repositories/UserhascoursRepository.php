<?php

namespace App\Models\Repositories;

use App\Class\Database;
use App\Services\SQLRequest;
use Exception;
use PDOException;

final class UserhascoursRepository extends Database
{
    // params


    // contructor
    public function __construct()
    {
        parent::__construct();
    }

    // CRUD
    use SQLRequest;

    /**
     * @param  array<string, mixed>  $data
     * @return boolean
     */
    public function updateUserhascours(array $data): bool
    {
        $sql = "UPDATE userhascours SET presence = :presence, delay = :delay WHERE user_id = UUID_TO_BIN(:user_id) AND cours_id = :cours_id ";
        $params = [
            'presence' => $data['presence'],
            'delay' => $data['delay'],
            'user_id' => $data['user_id'],
            'cours_id' => $data['cours_id']
        ];
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $stmt->closeCursor();
            return true;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }
}
