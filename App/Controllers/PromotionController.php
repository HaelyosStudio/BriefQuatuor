<?php

namespace App\Controllers;

use App\Models\Repositories\PromoRepository;
use App\Services\Constraints;
use App\Services\CSRFToken;
use App\Services\Sanitize;
use App\Services\IssetFormData;

final class PromotionController
{
    // params

    // constructor
    public function __construct()
    {
    }

    // traits
    use Constraints;
    use CSRFToken;
    use Sanitize;
    use IssetFormData;

    public function accessPromo()
    {
        $acceptedRole = ['Campus_manager', 'Responsable_pedagogique', 'Formateur', 'Delegue'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $response = ['success' => true];
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = ['success' => false, 'message' => 'wrong role'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }

    public function accessCrudPromo()
    {
        $acceptedRole = ['Campus_manager', 'Responsable_pedagogique'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $response = ['success' => true];
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = ['success' => false, 'message' => 'wrong role'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }

    public function displayPromo()
    {
        $acceptedRole = ['Campus_manager', 'Responsable_pedagogique', 'Formateur', 'Delegue'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $promoRepo = new PromoRepository();
            $allPromo = $promoRepo->findAll('Promo', false);

            foreach ($allPromo as $promo) {
                $promoId = $promo->getId();
                $promoName = $promo->getName();
                $promoDateStart = $promo->getDate_start();
                $promoDateFin = $promo->getDate_fin();
                $promoPlaces = $promo->getPlaces();
            }

            $response = [
                'success' => true,
                'promoId' => $promoId,
                'promoName' => $promoName,
                'promoDateStart' => $promoDateStart,
                'promoDateFin' => $promoDateFin,
                'promoPlaces' => $promoPlaces,
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = ['success' => false, 'message' => 'wrong role'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }

    public function editPromo()
    {
        $acceptedRole = ['Campus_manager', 'Responsable_pedagogique'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $rawBody = file_get_contents("php://input");
            $body = json_decode($rawBody, true);

            if ($this->issetFormData($body)) {
                $promoRepo = new PromoRepository();
                $promoId = $body['promoId'];
                $name = $body['name'];
                $date_start = $body['date_start'];
                $date_fin = $body['date_fin'];
                $places = $body['places'];
                $columnsData = [
                    "name" => $name,
                    "date_start" => $date_start,
                    "date_fin" => $date_fin,
                    "places" => $places
                ];
                if ($promoRepo->update('Promo', $columnsData, 'id', $promoId)) {
                    $response = ['success' => true, 'message' => 'update success'];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                } else {
                    $response = ['success' => false, 'message' => 'erreur when updating'];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                }
            } else {
                $response = ['success' => false, 'message' => 'Clé(s) manquante(s) dans la requête'];
                header('Content-Type: application/json');
                echo json_encode($response);
            }
        } else {
            $response = ['success' => false, 'message' => 'wrong role'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }

    public function createPromo()
    {
        $acceptedRole = ['Campus_manager', 'Responsable_pedagogique'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $rawBody = file_get_contents("php://input");
            $body = json_decode($rawBody, true);

            if ($this->issetFormData($body)) {
                $promoRepo = new PromoRepository();
                $name = $body['name'];
                $date_start = $body['date_start'];
                $date_fin = $body['date_fin'];
                $places = $body['places'];
                $columnsData = [
                    "name" => $name,
                    "date_start" => $date_start,
                    "date_fin" => $date_fin,
                    "places" => $places
                ];
                if ($promoRepo->create('Promo', $columnsData)) {
                    $response = ['success' => true, 'message' => 'create success'];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                } else {
                    $response = ['success' => false, 'message' => 'erreur when creating'];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                }
            } else {
                $response = ['success' => false, 'message' => 'Clé(s) manquante(s) dans la requête'];
                header('Content-Type: application/json');
                echo json_encode($response);
            }
        } else {
            $response = ['success' => false, 'message' => 'wrong role'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }

    public function deletePromo()
    {
        $acceptedRole = ['Campus_manager', 'Responsable_pedagogique'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $rawBody = file_get_contents("php://input");
            $body = json_decode($rawBody, true);
            $promoRepo = new PromoRepository();
            $promoId = $body['promoId'];
            if ($this->issetFormData($body)) {
                if ($promoRepo->deleteCascade($promoId)) {
                    $response = ['success' => true, 'message' => 'delete success'];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                } else {
                    $response = ['success' => false, 'message' => 'erreur when deleting'];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                }
            } else {
                $response = ['success' => false, 'message' => 'Clé(s) manquante(s) dans la requête'];
                header('Content-Type: application/json');
                echo json_encode($response);
            }
        } else {
            $response = ['success' => false, 'message' => 'wrong role'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }
}
