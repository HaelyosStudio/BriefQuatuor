<?php

namespace App\Services;

trait IssetFormData
{

    /**
     * @param  array<string, mixed> $formData
     * @return boolean
     */
    public function issetFormData(array $formData): bool
    {
        foreach ($formData as $key => $value) {
            if (!isset($formData[$key])) {
                return false;
            }
        }
        return true;
    }
}
