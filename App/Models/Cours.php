<?php

namespace App\Models;



final class Cours
{
    // params
    private string $day, $period;
    private int $id, $id_promo;

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
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param  int $id
     * @return self
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return string
     */
    public function getDay(): string
    {
        return $this->day;
    }

    /**
     * @param  string $day
     * @return self
     */
    public function setDay(string $day): self
    {
        $this->day = $day;

        return $this;
    }

    /**
     * @return string
     */
    public function getPeriod(): string
    {
        return $this->period;
    }

    /**
     * @param  string $period
     * @return self
     */
    public function setPeriod(string $period): self
    {
        $this->period = $period;

        return $this;
    }

    /**
     * @return int
     */
    public function getId_promo(): int
    {
        return $this->id_promo;
    }

    /**
     * @param  integer $id_promo
     * @return self
     */
    public function setId_promo(int $id_promo): self
    {
        $this->id_promo = $id_promo;

        return $this;
    }
}