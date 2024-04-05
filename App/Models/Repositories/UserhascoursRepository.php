<?php

namespace App\Models\Repositories;

use App\Class\Database;
use Exception;
use PDO;
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

    /**
     * @param  string $userUuid
     * @return array
     */
    public function getPromoNameByUser(string $userUuid): array
    {
        $sql =
            "SELECT DISTINCT
            p.name AS promo_name
        FROM
            promo p
        JOIN userhaspromo UHP ON
            p.id = UHP.promo_id
        JOIN USER u ON
            UHP.user_id = u.uuid
        WHERE
            u.uuid = :userUuid";
        $params = [
            'user_uuid' => $userUuid
        ];
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }

    public function getNumberUserAndCoursIdByCurrentDateAndPeriodAndUserUuid(string $period, string $userUuid)
    {
        $sql =
            "SELECT
                COUNT(u.uuid) AS nb_users,
                c.id AS cours_id
            FROM
                USER u
            JOIN userhascours UHC ON
                u.uuid = UHC.user_id
            JOIN cours c ON
                UHC.cours_id = c.id
            WHERE
                c.day = CURRENT_DATE AND c.period = :period AND u.uuid = :user_uuid";

        $params = [
            'period' => $period,
            'user_uuid' => $userUuid
        ];
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }


    public function getIdCoursByUserAndCurrentDayAndPeriod(string $period, string $userUuid)
    {
        $sql =
            "SELECT
                c.id AS cours_id
            FROM
                cours c
            JOIN userhascours UHC ON
                c.id = UHC.cours_id
            JOIN USER u ON
                UHC.user_id = u.uuid
            WHERE
                c.day = CURRENT_DATE 
            AND c.period = :period 
            AND u.uuid = :userUuid";

        $params = [
            'period' => $period,
            'userUuid' => $userUuid
        ];
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }


    /**
     * @param  array<string, mixed>  $data
     * @return boolean
     */
    public function updateUserHasCours(array $data): bool
    {
        $sql =
            "UPDATE
                userhascours 
            SET 
                presence = :presence, 
                delay = :delay 
            WHERE 
                user_id = UUID_TO_BIN(:user_id) AND cours_id = :cours_id ";
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
    public function getSignCurrentDayByCours(int $coursId): int
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
                    c.day = CURRENT_DATE AND HOUR(NOW()) > 9 AND TIME(NOW()) < '12:30:00' AND uhc.presence = 0";
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

    /**
     * @param  string $period
     * @return array<string, mixed>
     */
    public function getCoursIdAndPromoNameByDay(string $period): array
    {
        $sql =
            "SELECT 
                c.id AS cours_id,
                p.name AS promo_name
            FROM 
                cours c
            JOIN promo p ON
                c.id_promo = p.id
            WHERE
                c.day = CURRENT_DATE AND c.period = :period ";

        $params = [
            'period' => $period
        ];
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }
}