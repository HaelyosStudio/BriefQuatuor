<?php

namespace App\Services;

trait Constraints
{
    /**
     * @param  string  $inputValue
     * @param  integer $length
     * @return boolean
     */
    public function maxLengthConstraint(string $inputValue, int $length): bool
    {
        return strlen($inputValue) <= $length ?  true : false;
    }

    /**
     * @param  string  $inputValue
     * @param  integer $length
     * @return boolean
     */
    public function minLengthConstraint(string $inputValue, int $length): bool
    {
        return strlen($inputValue) >= $length ?  true : false;
    }

    /**
     * @param  string  $firstPassword
     * @param  string  $secondPassword
     * @return boolean
     */
    public function checkDoublePassword(string $firstPassword, string $secondPassword): bool
    {
        return $secondPassword === $firstPassword ? true : false;
    }

    /**
     * @param  array<string, mixed> $formData
     * @return boolean | array
     */
    public function notEmpty(array $formData): bool | array
    {
        foreach ($formData as $key => $value) {
            if (empty($value)) {
                $replace = ['Register', 'Update'];
                $input = str_replace($replace, '', $key);
                $error[$key] = "Your $input can't be empty";
            }
        }
        return empty($error) ? true : $error;
    }
}