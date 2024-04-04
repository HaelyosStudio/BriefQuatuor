<?php

namespace App\Controllers;

use App\Models\Repositories\UserhascoursRepository;

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
        $rawBody = file_get_contents("php://input");

        $data = json_decode($rawBody, true);

        if ($this->issetFormData($data)) {
            if ($this->notEmpty($data)) {
                $time = $data['time'];
                $userId = $data['userId'];
                $coursId = $data['coursId'];
                date_default_timezone_set('Europe/Paris');
                $currentTime = date('H:i');

                $dateTime = new DateTime($time);
                $currentDateTime = new DateTime($currentTime);
                $timeDiff = $currentDateTime->diff($dateTime);
                $minutesDiff = $timeDiff->format("%i");

                if ($minutesDiff > 15) {

                    $userHasCoursRepo = new UserhascoursRepository();
                    $userHasCoursRepo->update('userhascours',);
                    $response = [
                        "success" => true,
                        "message" => "Validation réussie",
                    ];
                    echo json_encode($response);
                }
            }
        }
    }
}
