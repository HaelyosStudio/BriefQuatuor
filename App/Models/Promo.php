<?php

namespace App\Models;

final class Promo
{
    // params
    private string $name, $date_start, $date_fin;
    private int $id, $places;

    // contructor
    public function __construct(array $data = null)
    {
        if (!empty($data)) {
            $this->hydrate($data);
        }
    }

    // function to hydrate

    /**
     * @param  array<string, mixed> $data
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
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param  string $name
     * @return self
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getDate_start(): string
    {
        return $this->date_start;
    }

    /**
     * @param  string $date_start
     * @return self
     */
    public function setDate_start(string $date_start): self
    {
        $this->date_start = $date_start;

        return $this;
    }

    /**
     * @return string
     */
    public function getDate_fin(): string
    {
        return $this->date_fin;
    }

    /**
     * @param  string $date_fin
     * @return self
     */
    public function setDate_fin(string $date_fin): self
    {
        $this->date_fin = $date_fin;

        return $this;
    }

    /**
     * @return integer
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param  integer $id
     * @return self
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return integer
     */
    public function getPlaces(): int
    {
        return $this->places;
    }

    /**
     * @param  integer $places
     * @return self
     */
    public function setPlaces(int $places): self
    {
        $this->places = $places;

        return $this;
    }
}
