<?php

namespace PinCrowd\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;

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
     * @Route("/score/{laneId}")
     * @Template()
     */
    public function getScoreAction($laneId) {

        $result = array('20' => 12345);
        return new Response(json_encode(array('locations' => $result)));
    }

}
