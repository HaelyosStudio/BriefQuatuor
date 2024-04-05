<?php

namespace App\Controllers;

use App\Models\Repositories\UserHasCoursRepository;
use App\Models\Repositories\UserRepository;

use App\Services\Constraints;
use App\Services\CSRFToken;
use App\Services\Sanitize;
use App\Services\IssetFormData;
use DateTimeImmutable;
use DateTimeZone;

final class CoursController
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

    public function getCoursAndPromoByUser()
    {
        $acceptedRole = ['Formateur', 'Delegue', 'Apprenant'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $timeZone = new DateTimeZone('Europe/Paris');
            $currentTime = new DateTimeImmutable('now', $timeZone);
            $currentTimeFormat = $currentTime->format('H:i');
            if ($currentTimeFormat > '09:00' && $currentTimeFormat < '12:30') {
                $period = "Matin";
            }
            if ($currentTimeFormat > '13:30' && $currentTimeFormat < '17:00') {
                $period = "Après-midi";
            }

            $userRepo = new UserRepository();
            $user = $userRepo->findOne('user', 'email', $_SESSION['email'], 1);
            $userUuid = $user->getUuid();

            $UHCRepo = new UserHasCoursRepository();
            $getCoursIdAndNbUserByPeriod = $UHCRepo->getNumberUserAndCoursIdByCurrentDateAndPeriodAndUserUuid($period, $userUuid);
            $coursId = $getCoursIdAndNbUserByPeriod['cours_id'];
            $nbUsers = $getCoursIdAndNbUserByPeriod['nb_users'];
            $getPromoNameByUser = $UHCRepo->getPromoNameByUser($userUuid);
            $promoName = $getPromoNameByUser['promo_name'];
            $currentDate = date('d/m/Y');

            $response = [
                "success" => true,
                "message" => "Problème getCours.",
                "promoName" => $promoName,
                "coursId" => $coursId,
                "nbUsers" => $nbUsers,
                "currentDay" => $currentDate
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = [
                'success' => false,
                'message' => "Votre role ne vous permet pas d'intéragir avec cette page."
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
        };
    }
    public function validatePresence()
    {
        $acceptedRole = ['Formateur', 'Delegue', 'Apprenant'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $rawBody = file_get_contents("php://input");

            $body = json_decode($rawBody, true);
            if ($this->issetFormData($body)) {
                if ($this->notEmpty($body)) {
                    $coursId = htmlentities($body['coursId']);
                    $userRepo = new UserRepository();
                    $user = $userRepo->findOne('user', 'email', $_SESSION['email'], 1);
                    $userUuid = $user->getUuid();

                    $timeZone = new DateTimeZone('Europe/Paris');
                    $currentTime = new DateTimeImmutable('now', $timeZone);
                    $currentTimeFormat = $currentTime->format('H:i');
                    if ($currentTimeFormat > '09:00' && $currentTimeFormat < '12:30') {
                        $time = new DateTimeImmutable('09:00');
                    }
                    if ($currentTimeFormat > '13:30' && $currentTimeFormat < '17:00') {
                        $time = new DateTimeImmutable('13:00');
                    } else {
                        $response = [
                            "success" => false,
                            "message" => "La journée est passée, vous ne pouvez plus signer.",
                        ];
                        header('Content-Type: application/json');
                        echo json_encode($response);
                    };
                    $UHCRepo = new UserHasCoursRepository();
                    $timeDiff = $currentTime->diff($time);
                    $minutesDiff = $timeDiff->format("%i");

                    $data = [
                        'user_id' => $userUuid,
                        'cours_id' => $coursId,
                        'presence' => 1,
                    ];
                    if ($minutesDiff > "15") {
                        $data['delay'] = 1;

                        if ($UHCRepo->updateUserHasCours($data)) {
                            $response = [
                                "success" => true,
                                "message" => "Validation réussie avec un retard.",
                            ];
                            header('Content-Type: application/json');
                            echo json_encode($response);
                        } else {
                            $response = [
                                "success" => false,
                                "message" => "Problème avec la base de donnée.",
                            ];
                            header('Content-Type: application/json');
                            echo json_encode($response);
                        };
                    } else {
                        $data['delay'] = 0;
                        $UHCRepo = new UserHasCoursRepository();
                        if ($UHCRepo->updateUserHasCours($data)) {
                            $response = [
                                "success" => true,
                                "message" => "Validation réussie sans retard.",
                            ];
                            header('Content-Type: application/json');
                            echo json_encode($response);
                        } else {
                            $response = [
                                "success" => false,
                                "message" => "Problème avec la base de donnée.",
                            ];
                            header('Content-Type: application/json');
                            echo json_encode($response);
                        };
                    };
                } else {
                    $response = [
                        "success" => false,
                        "message" => "Le champ ne peut pas être vide.",
                    ];
                    header('Content-Type: application/json');
                    echo json_encode($response);
                };
            } else {
                $response = [
                    "success" => false,
                    "message" => "Le champ n'a pas été remplie",
                ];
                header('Content-Type: application/json');
                echo json_encode($response);
            };
        } else {
            $response = [
                'success' => false,
                'message' => "Votre role ne vous permet pas d'intéragir avec cette page."
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
        };
    }

    public function getSignaturesByCoursOnCurrentDay()
    {
        $acceptedRole = ['Formateur', 'Delegue', 'Apprenant'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $rawBody = file_get_contents("php://input");
            $body = json_decode($rawBody, true);

            $coursId = htmlentities($body['cours_id']);
            $UHCRepository = new UserHasCoursRepository();
            $getPresence = $UHCRepository->getSignCurrentDayByCours($coursId);
            if (is_null($getPresence) === false) {
                $response = [
                    'success' => true,
                    'message' => "Votre role ne vous permet pas d'intéragir avec cette page.",
                    'presence' => $getPresence
                ];
                header('Content-Type: application/json');
                echo json_encode($response);
            } else {
                $response = [
                    'success' => false,
                    'message' => "Problème avec la base de donnée."
                ];
                header('Content-Type: application/json');
                echo json_encode($response);
            };
        } else {
            $response = [
                'success' => false,
                'message' => "Votre role ne vous permet pas d'intéragir avec cette page."
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
        };
    }

    public function getSummaryCurrentDay()
    {
        $acceptedRole = ['Campus_manager', 'Responsable_pedagogique'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $rawBody = file_get_contents("php://input");
            $body = json_decode($rawBody, true);
            $coursId = htmlentities($body['cours_id']);
            if (date('H:i') > '09:00' && date('H:i') < '12:30') {
                $period = 'Matin';
            } else if (date('H:i') > '13:30' && date('H:i') < '17:00') {
                $period = 'Après-midi';
            };
            $UHCRepository = new UserHasCoursRepository();
            $getPresence = $UHCRepository->getSignCurrentDayByCours($coursId);
            $getAbsence = $UHCRepository->getNotSignCurrentDay($coursId);
            $canStillSign = $UHCRepository->canStillSign($coursId, $period);

            $response = [
                'success' => true,
                'message' => "Votre role ne vous permet pas d'intéragir avec cette page.",
                'presence' => $getPresence,
                'absence' => $getAbsence,
                'canStillSign' => $canStillSign
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = [
                'success' => false,
                'message' => "Votre role ne vous permet pas d'intéragir avec cette page."
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
        };
    }
}