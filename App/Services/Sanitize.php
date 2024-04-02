<?php

namespace App\Services;

trait Sanitize
{
    /**
     * @param  array $formInput
     * @return array
     */
    public function sanitize(array $formInput): array
    {
        foreach ($formInput as $key => $value) {
            $dataSanitize[$key] = htmlentities($value);
        }
        return $dataSanitize;
    }
}
