<?php

namespace App\Services;

trait IssetFormData
{

    /**
     * @param  array $post
     * @return boolean
     */
    public function issetFormData(array $post): bool
    {
        foreach ($post as $key => $value) {
            if (!isset($post[$key])) {
                return false;
            }
        }
        return true;
    }
}
