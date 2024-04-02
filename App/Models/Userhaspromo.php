<?php

namespace App\Models;

final class Userhaspromo
{
    // params
    private string $user_id;
    private int $promo_id;

    // contructor
    public function __construct(array $data = null)
    {
        if (!empty($data)) {
            $this->hydrate($data);
        }
    }

    // function to hydrate

    /**
     * @param  array<string,mixed> $data
     * @return void
     */
    private function hydrate(array $data): void
    {
        foreach ($data as $key => $value) {
            $method = "set" . ucfirst($key);
            if (method_exists($this, $method)) {
                $this->$method($value);
            }
        }
    }


    // setters & getters


    /**
     * @return string
     */
    public function getUser_id(): string
    {
        return $this->user_id;
    }

    /**
     * @param  string $user_id
     * @return self
     */
    public function setUser_id(string $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    /**
     * @return integer
     */
    public function getPromo_id(): int
    {
        return $this->promo_id;
    }

    /**
     * @param  integer $promo_id
     * @return self
     */
    public function setPromo_id(int $promo_id): self
    {
        $this->promo_id = $promo_id;

        return $this;
    }
}