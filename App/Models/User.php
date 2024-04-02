<?php

namespace App\Models;

final class User
{
    // params
    private string $uuid, $last_name, $first_name, $password, $email;
    private int $active, $role_id;

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
    public function getUuid(): string
    {
        return $this->uuid;
    }

    /**
     * @param  string $uuid
     * @return self
     */
    public function setUuid(string $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    /**
     * @return string
     */
    public function getLast_name(): string
    {
        return $this->last_name;
    }

    /**
     * @param  string $last_name
     * @return self
     */
    public function setLast_name(string $last_name): self
    {
        $this->last_name = $last_name;

        return $this;
    }

    /**
     * @return string
     */
    public function getFirst_name(): string
    {
        return $this->first_name;
    }

    /**
     * @param  string $first_name
     * @return self
     */
    public function setFirst_name(string $first_name): self
    {
        $this->first_name = $first_name;

        return $this;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param  string $password
     * @return self
     */
    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param  string $email
     * @return self
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return integer
     */
    public function getActive(): int
    {
        return $this->active;
    }

    /**
     * @param  integer $active
     * @return self
     */
    public function setActive(int $active): self
    {
        $this->active = $active;

        return $this;
    }

    /**
     * @return integer
     */
    public function getRole_id(): int
    {
        return $this->role_id;
    }

    /**
     * @param  integer $role_id
     * @return self
     */
    public function setRole_id(int $role_id): self
    {
        $this->role_id = $role_id;

        return $this;
    }
}