<?php

namespace App\Controllers;

use App\Models\User;
use App\Models\Repositories\UserhascoursRepository;
use App\Models\Repositories\UserRepository;
use App\Services\Constraints;
use App\Services\CSRFToken;
use App\Services\Sanitize;
use App\Services\IssetFormData;
use DateTime;

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

    public function validatePresence()
    {
        $acceptedRole = ['Formateur', 'Delegue', 'Apprenant'];
        if (in_array($_SESSION['role'], $acceptedRole)) {
            $rawBody = file_get_contents("php://input");

            $body = json_decode($rawBody, true);
            if ($this->issetFormData($body)) {
                if ($this->notEmpty($body)) {
                    $period = $body['period'];

                    if ($period === 'matin') {
                        $time = date('09:00');
                    } else if ($period === "après_midi") {
                        $time = date('13:00');
                    }
                    $currentTime = date('H:i');
                    $currentDateTime = new DateTime($currentTime);
                    $dateTime = new DateTime($time);
                    $timeDiff = $currentDateTime->diff($dateTime);
                    $minutesDiff = $timeDiff->format("%i");
                    $coursId = $body['coursId'];
                    $userRepo = new UserRepository();
                    $user = $userRepo->findOne('user', 'email', $_SESSION['email']);
                    $userUuid = $user->getUuid();

                    $data = [
                        'user_id' => $userUuid,
                        'cours_id' => $coursId,
                        'presence' => 1,
                    ];
                    if ($minutesDiff > 15) {
                        $data['delay'] = 1;
                        $userHasCoursRepo = new UserhascoursRepository();
                        if ($userHasCoursRepo->updateUserhascours($data)) {
                        }
                        $response = [
                            "success" => true,
                            "message" => "Validation réussie",
                        ];
                        header('Content-Type: application/json');
                        echo json_encode($response);
                    } else {
                        $userHasCoursRepo = new UserhascoursRepository();
                        if ($userHasCoursRepo->updateUserhascours($data)) {
                        }
                        $response = [
                            "success" => true,
                            "message" => "Validation réussie",
                        ];
                        header('Content-Type: application/json');
                        echo json_encode($response);
                    }
                }
            }
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = ['success' => false, 'message' => 'wrong role'];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }
}
