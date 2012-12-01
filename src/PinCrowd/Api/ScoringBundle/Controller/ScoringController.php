<?php

namespace PinCrowd\Api\ScoringBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ScoringController extends Controller
{
    public function indexAction()
    {
        $request = Request::createFromGlobals();
        try {
            $command = json_decode($request->request);
        } catch (InvalidTypeException $e) {
            $response = new Response(
                'Invalid request', 400, array('content-type' => 'text/html')
            );
            $response->send();
        }

        if (array_key_exists('cmd', $command)) {
            switch ($command['cmd']) {
                case 'deleteUser':
                    $response = $this->forward(
                        'PinCrowdApiScoringBundle:Scoring:deleteUser',
                        array('data'  => $command['data'])
                    );
                    break;
            }
        }

    }


    public function deleteUser($data)
    {
        $gameId = $data['gameId'];
        $response = new Response(
            "Game ID $gameId was deleted", 200, array('content-type' => 'text/html')
        );
        return $response;
    }


    public function getScoreAction($laneId) {

        $result = array('20' => 12345);
        return new Response(json_encode(array('locations' => $result)));
    }
}
