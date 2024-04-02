<?php

namespace App\Services;

trait Constraints
{
    /**
     * @param  string  $inputform
     * @param  integer $length
     * @return boolean
     */
    public function maxLengthConstraint(string $inputform, int $length): bool
    {
        return strlen($inputform) <= $length ?  true : false;
    }

    /**
     * @param  string  $inputform
     * @param  integer $length
     * @return boolean
     */
    public function minLengthConstraint(string $inputform, int $length): bool
    {
        return strlen($inputform) >= $length ?  true : false;
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
     * @param  array $inputValue
     * @return bool|array
     */
    public function notEmpty(array $inputValue): bool | array
    {
        foreach ($inputValue as $key => $value) {
            if (empty($value)) {
                $replace = ['Register', 'Update'];
                $input = str_replace($replace, '', $key);
                $error[$key] = "Your $input can't be empty";
            }
        }
        return empty($error) ? true : $error;
    }
}
