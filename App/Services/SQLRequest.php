<?php
// This trait is only functional with the same structure of this app and with uuid

namespace App\Services;

use Exception;
use PDO;
use PDOException;

trait SQLRequest
{

    /**
     * @param  string  $table
     * @param  array <string, mixed>   $columnsValue
     * @param  boolean $object
     * @return boolean | object
     */
    public function create(string $table, array $columnsValue, bool $object = false): bool | object
    {
        $Table = ucfirst($table);
        foreach ($columnsValue as $key => $value) {
            $columns[] = $key;
            $values[] = ":$key";
            $params[$key] = $value;
        }
        $columnsToUpdate = implode(", ", $columns);
        $valuesToCreate = implode(", ", $values);

        $sql = "INSERT INTO $table ($columnsToUpdate) VALUE($valuesToCreate)";
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            if ($object === true) {
                $stmt->setFetchMode(PDO::FETCH_CLASS, "App\\Models\\$Table");
                $result = $stmt->fetch();
                $stmt->closeCursor();
                return $result;
            } else {
                $stmt->closeCursor();
                return true;
            }
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
            return false;
        }
    }



    /**
     * @param  string $table
     * @param  boolean $uuid
     * @return array
     */
    public function findAll(string $table, bool $uuid = false): array
    {
        $Table = ucfirst($table);
        if ($uuid === true) {
            $columns = "$table.*, BIN_TO_UUID(uuid) AS uuid";
        } else {
            $columns = "*";
        }
        $sql = "SELECT $columns FROM $table";
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_CLASS, "App\\Models\\$Table");
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }

    /**
     * @param  string $table
     * @param  string $where
     * @param  string $paramsData
     * @return object | false
     */
    public function findOne(string $table, string $where, string $paramsData): object | false
    {
        if ($where === 'uuid') {
            $data = "UUID_TO_BIN(:$where)";
            $columns = "$table.*, BIN_TO_UUID(uuid) AS uuid";
        } else {
            $data = ":$where";
            $columns = "*";
        }
        $Table = ucfirst($table);
        $sql = "SELECT $columns FROM $table WHERE $where = $data";
        $params = [
            $where => $paramsData
        ];
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $stmt->setFetchMode(PDO::FETCH_CLASS, "App\\Models\\$Table");
            $result = $stmt->fetch();
            $stmt->closeCursor();
            return $result;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
        }
    }

    /**
     * @param  string  $table
     * @param  array <string, mixed>   $setColumnsData
     * @param  string  $where
     * @param  string  $id
     * @return boolean
     */
    public function update(string $table, array $setColumnsData, string $where, string $id): bool
    {
        foreach ($setColumnsData as $key => $value) {
            $params[$key] = $value;
            if ($where === 'uuid') {
                $data = "UUID_TO_BIN(:$where)";
                $params['uuid'] = $id;
            } else {
                $data = ":$where";
                $params['id'] = $id;
            }
            $columns[] = "$key = :$key";
        }
        $setColumns = implode(", ", $columns);
        $sql = "UPDATE $table SET $setColumns  WHERE $where = $data";
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $stmt->closeCursor();
            return true;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
            return false;
        }
    }

    /**
     * @param  string  $table
     * @param  string  $where
     * @param  string  $id
     * @return boolean
     */
    public function delete(string $table, string $where, string $id): bool
    {
        if ($where === 'uuid') {
            $data = "UUID_TO_BIN(:$where)";
            $params = [
                'uuid' => $id
            ];
        } else {
            $data = ":$where";
            $params = [
                'id' => $id
            ];
        }
        $sql = "DELETE FROM $table WHERE $where = $data";
        try {
            $stmt = $this->getDb()->prepare($sql);
            $stmt->execute($params);
            $stmt->closeCursor();
            return true;
        } catch (PDOException $error) {
            throw new Exception('Error: ' . $error->getMessage());
            return false;
        }
    }

    /**
     * @param  string $table
     * @param  string $where
     * @param  string $data
     * @return string
     */
    public function getUuid(string $table, string $where, string $data): string
    {
        $sql = "SELECT BIN_TO_UUID(uuid) AS uuid FROM $table WHERE $where = :$where";
        $params = [
            $where => $data
        ];
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