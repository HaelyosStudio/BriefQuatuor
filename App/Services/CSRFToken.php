<?php

namespace App\Services;


trait CSRFToken
{
    /**
     * @param  string $nameToken
     * @return string
     */
    public function createCSRFToken(string $nameToken): string
    {
        $csrfToken = bin2hex(random_bytes(32));
        $_SESSION[$nameToken] = $csrfToken;
        return $csrfToken;
    }

    /**
     * @param  string  $csrfInput
     * @param  string  $csrfSession
     * @return boolean
     */
    public function verifyCSRFToken(string $csrfInput, string $csrfSession): bool
    {
        if (isset($csrfInput, $csrfSession) && !empty($csrfInput) && !empty($csrfSession) && $csrfInput === $csrfSession) {
            return true;
        }
        return false;
    }
}
