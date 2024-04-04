<?php

namespace App\Models\Repositories;

use App\Class\Database;
use App\Services\SQLRequest;

final class PromoRepository extends Database
{
    // params


    // contructor
    public function __construct()
    {
        parent::__construct();
    }

    // CRUD
    use SQLRequest;

    public function deleteCascade($promoId)
    {
        $query = 'DELETE FROM Cours
                WHERE id_promo = :promoId;
                DELETE FROM UserHasPromo
                WHERE id_promo = :promoId;
                DELETE FROM Promo
                WHERE id = :promoId;';

        $req = $this->getDb()->prepare($query);

        $req->execute([
            'promoId' => $promoId,
        ]);
    }
}
