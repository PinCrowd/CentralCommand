<?php

namespace Pincrowd\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Pincrowd\ApiBundle\Document\Lane;
use Pincrowd\ApiBundle\Document\Match;
use Pincrowd\ApiBundle\Document\Game;
use Pincrowd\ApiBundle\Document\User;

class DefaultController extends Controller
{
    /**
     * @Route("/test/foo/{name}")
     * @Template()
     */
    public function indexAction($name)
    {
        return array('name' => $name);
    }

    /**
     * @Route("/endpoint/")
     * @Method({"POST"})
     */
    public function endpointAction()
    {
        $request = Request::createFromGlobals();

        try {
            $values = json_decode($request->getContent(), true);
        } catch (Exception $e) {
            print_r($e->getMessage());
        }

        switch ($values['cmd']) {
            case 'newMatch':
                $response = $this->forward(
                    'PincrowdApiBundle:Default:newMatch',
                    array('values' => $values['data'])
                );
                break;
            case 'getScores':
                $response = $this->forward(
                    'PincrowdApiBundle:Default:getScores',
                    array('values' => $values['data'])
                );
            case 'deleteGame':
                $response = $this->forward(
                    'PincrowdApiBundle:Default:deleteGame',
                    array('values' => $values['data'])
                );
                break;
        }

        return $response;
    }


    /**
     * @Route("/createLane/")
     */
    public function createLaneAction()
    {

        $lane = new Lane();
        $dm = $this->get('doctrine_mongodb')->getManager();
        $dm->persist($lane);
        $dm->flush();

        return new Response(json_encode(array('laneId' => $lane->getId())));
    }

    /**
     * @Route("/newMatch/{values}")
     */
    public function newMatchAction($values)
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $match = new Match();
        $dm->persist($match);
        $dm->flush();

        $lane = $dm->getRepository('PincrowdApiBundle:Lane')
                   ->findOneById($values['laneId']);
        $match->setLane($lane);
        $games = $gamesResponse = array();

        for ($i=1; $i<=$values['gameCount']; $i++) {
            $game = new Game();
            $game->setUsername('Player '.$i)
                 ->setLaneId($lane)
                 ->setScore(0)
                 ->setMatch($match)
                 ->setDateStarted(date('Y-m-d H:i:s'))
                 ->setActive(false);
            if ($i == 1) $game->setActive(true);
            $games[] = $game;
            $dm->persist($game);
        }

        $dm->flush();

        foreach ($games as $game) {
            $match->addGames($game);
            $gamesResponse[] = array(
                'id'     => $game->getId(),
                'name'   => $game->getUsername(),
                'active' => $game->getActive()
            );
        }
        $match->setCurrentPlayer($games[0]->getId());
        $dm->flush();

        return new Response(json_encode($gamesResponse));

    }

    /**
     * @Route("/getScores/{values}")
     */
    public function getScoresAction($values)
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $laneId = $values['laneId'];
        $lane = $dm->getRepository('PincrowdApiBundle:Lane')
                   ->findOneById($laneId);
        $games = $lane->getGames();
        $scores = array();
        foreach ($games as $game) {
            $scores[$game->getId()] = $game->getFrames();
        }

        return new Response(json_encode($scores));
    }


    /**
     * @Route("/deleteGame/{values}")
     */
    public function deleteGameAction($values)
    {
        $dm   = $this->get('doctrine_mongodb')->getManager();
        $game = $dm->getRepository('PincrowdApiBundle:Game')
                   ->findOneById($values['gameId']);
        if ($game) {
            $dm->remove($game);
            $dm->flush();
            return new Response('game deleted');
        } else {
            return new Response('game not found');
        }

    }
}
