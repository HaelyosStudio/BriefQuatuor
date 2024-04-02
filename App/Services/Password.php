<?php

namespace App\Services;

trait Password
{
    /**
     * @param  string $password
     * @return string
     */
    public function passwordHash(string $password): string
    {
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        return $passwordHash;
    }
}