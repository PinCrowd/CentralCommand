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

        $response = $this->forward(
            "PincrowdApiBundle:Default:".$values['cmd'],
            array('values' => $values['data'])
        );

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
        $lane->setMatch($match);
        $match->setLane($lane);
        $games = $gamesResponse = array();

        for ($i=1; $i<=$values['gameCount']; $i++) {
            $game = new Game();
            $user = new User();
            $user->setUsername('Player '.$i)
                 ->setAvatar('/images/png/avatar_sean_connery.png');

            $dm->persist($user);
            $dm->flush();


            $game->setUsername($user->getUsername())
                 ->setUser($user)
                 ->setLaneId($lane)
                 ->setScore(0)
                 ->setMatch($match)
                 ->setDateStarted(date('Y-m-d H:i:s'))
                 ->setActive(false);
            if ($i == 1) $game->setActive(true);
            $games[] = $game;
            $dm->persist($game);
            $dm->flush();
        }

        $dm->flush();

        foreach ($games as $game) {
            $match->addGames($game);
            $gamesResponse[] = array(
                'id'     => $game->getId(),
                'player' => array("id"          => $game->getUser()->getId(),
                                  "username"    => $game->getUser()->getUsername(),
                                  "avatar"      => $game->getUser()->getAvatar(),
                            ),
                'active' => $game->getActive(),
                'frames' => $game->getFrames()
            );
        }
        $match->setCurrentPlayer($games[0]->getId());
        $dm->flush();


        $response = array();
        $response["laneId"] = $match->getLane()->getId();
        $response["matchId"] = $match->getId();
        $response["games"] = $gamesResponse;



        return new Response(json_encode($response));

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
        $games = $lane->getMatch()->getGames();
        $scores = array();
        foreach ($games as $game) {
            $scores[$game->getId()] = array(
                'totalScore' => $game->getScore(),
                'frames'     => $game->getFrames(),
                'active'     => $game->getActive()
            );
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
            $game->getMatch()->getGames()->removeElement($game);
            $dm->remove($game);
            $dm->flush();
            return new Response('game deleted');
        } else {
            return new Response('game not found');
        }
    }

    /**
     * @Route("/addGame/{values}")
     */
    public function addGameAction($values)
    {
        $dm   = $this->get('doctrine_mongodb')->getManager();
        $lane = $dm->getRepository('PincrowdApiBundle:Lane')
                   ->findOneById($values['laneId']);

        $game = new Game();
        $game->setUsername($values['name'])
             ->setLaneId($lane)
             ->setScore(0)
             ->setMatch($lane->getMatch())
             ->setDateStarted(date('Y-m-d H:i:s'))
             ->setActive(false);
        $dm->persist($game);
        $dm->flush();
        $lane->getMatch()->addGames($game);
        $dm->flush();

        return new Response(
            json_encode(array('id' => $game->getId()))
        );
    }


    /**
     * @Route("/getGame/{values}")
     * @Method({"POST"})
     */
    public function getGameAction($values)
    {
        $dm   = $this->get('doctrine_mongodb')->getManager();
        $game = $dm->getRepository('PincrowdApiBundle:Game')
                   ->findOneById($values['gameId']);

        if ($game) {
            // TODO: why the hell is getUsername returning the ID ???
            $user = $dm->getRepository('PincrowdApiBundle:User')
                   ->findOneById($game->getUser()->getUsername());

            $gamesResponse = array(
                'id'     => $game->getId(),
                'player' => array("id"          => $user->getId(),
                                  "username"    => $user->getUsername(),
                                  "avatar"      => $user->getAvatar(),
                            ),
                'active' => $game->getActive(),
                'frames' => $game->getFrames()
            );
            return new Response(json_encode($gamesResponse));
        } else {
            return new Response('game not found');
        }
    }


    /**
     * @Route("/editScore/{values}")
     */
    public function editScoreAction($values)
    {
        $dm   = $this->get('doctrine_mongodb')->getManager();
        $game = $dm->getRepository('PincrowdApiBundle:Game')
                   ->findOneById($values['gameId']);
        if ($game) {
            $game->editScore($values['frame'], $values['throw'], $values['score']);
            $dm->flush();
            return new Response(json_encode($game->getFrames()));
        } else {
            return new Response('game not found');
        }

    }

    /**
     * @Route("/editPlayer/{values}")
     */
    public function editPlayerAction($values)
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $game = $dm->getRepository('PincrowdApiBundle:Game')
                   ->findOneById($values['gameId']);
        if ($game) {
            $game->setUsername($values['name']);

            $user = $dm->getRepository('PincrowdApiBundle:User')
                   ->findOneById($game->getUser()->getUsername());

            $user->setUsername($values['name']);

            $dm->flush();
            return new Response(json_encode( array("msg"=>"player edited") ));
        } else {
            return new Response('game not found');
        }
    }

    /**
     * @Route("/updateScore/{values}")
     */
    public function updateScoresAction($values)
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $game = $dm->getRepository('PincrowdApiBundle:Game')
                   ->findOneById($values['gameId']);

        $score = $game->buildFrames($game->getThrows());
        return new Response(json_encode($score));
    }

    /**
     * @Route("/addThrow/{values}")
     */
    public function addThrowsAction($values)
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $game = $dm->getRepository('PincrowdApiBundle:Game')
                   ->findOneById($values['gameId']);

        if (!is_array($values['throws'])) {
            $throws = array($values['throws']);
        } else {
            $throws = $values['throws'];
        }

        foreach ($throws as $throw) {
            $game->addThrows($throw);
        }

        $game->setActive(true);
        $score = $game->calculateScore();

        // Change current player if this frame is finished
        if (!$game->getActive()) {
            echo "\n\nsetting next\n\n";
            $match = $game->getMatch();
            $match->setNextPlayerActive();
            $dm->persist($match);

            $activeGame = $dm->getRepository('PincrowdApiBundle:Game')
                             ->findOneById($match->getCurrentPlayer());
            $activeGame->setActive(true);

        }

        $dm->flush();

        return new Response(json_encode($score));
    }
}
