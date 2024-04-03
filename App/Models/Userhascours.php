<?php

namespace App\Models;

final class Userhascours
{
    // params
    private string $user_id;
    private int $cours_id, $presence_id, $delay;

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
    public function getCours_id(): int
    {
        return $this->cours_id;
    }

    /**
     * @param  integer $cours_id
     * @return self
     */
    public function setCours_id(int $cours_id): self
    {
        $this->cours_id = $cours_id;

        return $this;
    }

    /**
     * @return integer
     */
    public function getPresence_id(): int
    {
        return $this->presence_id;
    }

    /**
     * @param  integer $presence_id
     * @return self
     */
    public function setPresence_id(int $presence_id): self
    {
        $this->presence_id = $presence_id;

        return $this;
    }

    /**
     * @return integer
     */
    public function getDelay(): int
    {
        return $this->delay;
    }

    /**
     * @param  integer $delay
     * @return self
     */
    public function setDelay(int $delay): self
    {
        $this->delay = $delay;

        return $this;
    }
}