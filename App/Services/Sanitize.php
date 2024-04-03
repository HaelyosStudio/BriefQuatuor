<?php

namespace App\Services;

trait Sanitize
{
    /**
     * @param  array<string, mixed> $formData
     * @return array<string, mixed>
     */
    public function sanitize(array $formData): array
    {
        foreach ($formData as $key => $value) {
            $dataSanitize[$key] = htmlentities($value);
        }
        return $dataSanitize;
    }
}
