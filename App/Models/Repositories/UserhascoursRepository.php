<?php

namespace App\Models\Repositories;

use App\Class\Database;
use App\Services\SQLRequest;
use Exception;
use PDOException;

final class UserHasCoursRepository extends Database
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
    public function updateUserHasCours(array $data): bool
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

    /**
     * @param  integer $coursId
     * @return integer
     */
    public function getSignCurrentDay(int $coursId): int
    {
        $sql =
            "SELECT
            COUNT(uhc.presence) AS presence
        FROM
            userhascours uhc
        JOIN cours c ON
            uhc.cours_id = :cours_id
        WHERE
            c.day = CURRENT_DATE AND uhc.presence = 1";

        $params = ['cours_id' => $coursId];

        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $result = $stmt->fetchColumn();
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }

    /**
     * @param  integer $coursId
     * @return integer
     */
    public function getNotSignCurrentDay(int $coursId): int
    {
        $sql =
            "SELECT
            COUNT(uhc.presence) AS absence
        FROM
            userhascours uhc
        JOIN cours c ON
            uhc.cours_id = :cours_id
        WHERE
            c.day = CURRENT_DATE AND uhc.presence = 0";

        $params = ['cours_id' => $coursId];

        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $result = $stmt->fetchColumn();
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }

    public function canStillSign(string $coursId, string $period)
    {
        if ($period === "Matin") {
            $sql =
                "SELECT
                    COUNT(uhc.presence) AS absence
                FROM
                    userhascours uhc
                JOIN cours c ON
                    uhc.cours_id = :cours_id
                WHERE
                    c.day = CURRENT_DATE AND TIME(NOW()) < '12:30:00' AND uhc.presence = 0";
        } else if ($period === "Après-midi") {
            $sql =
                "SELECT
                    COUNT(uhc.presence) AS absence
                FROM
                    userhascours uhc
                JOIN cours c ON
                    uhc.cours_id = :cours_id
                WHERE
                    c.day = CURRENT_DATE AND TIME(NOW()) > '13:30:00' AND HOUR(NOW()) < 17 AND uhc.presence = 0";
        };
        $params = ['cours_id' => $coursId];

        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $result = $stmt->fetchColumn();
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }
}
