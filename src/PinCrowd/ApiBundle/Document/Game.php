<?php
namespace Pincrowd\ApiBundle\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @category   Pincrowd
 * @package    Library
 */
/**
 *
 * @category   Pincrowd
 * @package    Library
 *
 * @MongoDB\Document
 */
class Game
{

    /**
     * @var $mixed
     * @MongoDB\Id
     */
    protected $id;
    /**
     * @var
     * @MongoDB\ReferenceOne(targetDocument="Lane")
     */
    protected $laneId;
    /**
     * @var
     * @MongoDB\ReferenceOne(targetDocument="Match")
     */
    protected $match;
    /**
     * @var
     * @MongoDB\Field(type="string")
     */
    protected $username;
    /**
     * @var array
     * @MongoDB\Field(type="hash")
     */
    protected $frames = array();
    /**
     * @var array
     * @MongoDB\Field(type="hash")
     */
    protected $throws = array();
    /**
     * @var
     * @MongoDB\Field(type="int")
     */
    protected $score;
    /**
     * @var
     * @MongoDB\Field(type="date")
     */
    protected $dateStarted;
    /**
     * @var
     * @MongoDB\Field(type="date")
     */
    protected $dateEnded;
    /**
     * @var
     * @MongoDB\Field(type="boolean")
     */
    protected $active;


    /**
     * @param $value
     *
     * @return int
     */
    protected function getValue($value)
    {
        if(in_array($value, array('X','/'))){
            return 10;
        } else {
            return $value;
        }
    }

    /**
     * @param $throws
     *
     * @return array
     */
    protected function buildFrames($throws)
    {
        $f = 0;
        for ($i = 0; $i < count($throws); $i++) {
            $score = null;
            ++$f;
            if($f < 10){
                if($throws[$i] == 'X'){
                    if(isset($throws[$i + 1]) && isset($throws[$i + 2])){
                        $score = 10 + $this->getValue($throws[$i + 1]);
                        if($throws[$i + 2] == 'X'){
                            $score = $score + $this->getValue($throws[$i + 2]);
                        }
                        elseif($throws[$i + 1] != 'X'){
                            $score = $score + ($this->getValue($throws[$i + 2]) - $this->getValue($throws[$i + 1]));
                        } else {
                            $score = $score + $this->getValue($throws[$i + 2]) ;
                        }
                        $frames[] = array(
                            'frame' => $f,
                            'throw' => array('X'),
                            'score' => $score
                        );
                    }
                } else {
                    $throw = array($throws[$i]);
                    if(isset($throws[$i + 1])){
                        arraypush($throw,$throws[$i + 1]);
                    }
                    if($throws[$i + 1] == '/' && isset($throws[$i + 2])){
                        $score = 10 + $this->getValue($throws[$i + 2]);
                    } elseif(isset($throws[$i + 1])) {
                        $score = $this->getValue($throws[$i + 1]);
                    }
                    $frames[] = array(
                        'frame' => $f,
                        'throw' => $throw,
                        'score' => $score
                    );
                    ++$i;
                }
            } elseif($f == 10){
                $throw = array($throws[$i]);
                if(isset($throws[$i + 1])){
                    arraypush($throw,$throws[$i + 1]);
                }
                if(isset($throws[$i + 2])){
                    arraypush($throw,$throws[$i + 2]);
                }
                if(isset($throws[$i + 1]) && isset($throws[$i + 2])){
                    $score = 10 + $this->getValue($throws[$i + 1]) + $this->getValue($throws[$i + 2]);
                }
                $frames[] = array(
                    'frame' => $f,
                    'throw' => $throw,
                    'score' => $score
                );
            }
        }
        return $frames;
    }
    /**
     *
     */
    public function calculateScore()
    {
        $total = 0;
        $throws = $this->throws;
        $frames = $this->buildFrames($throws);
        foreach ($frames as $key => $frame) {
            $total = $total + $frame['score'];
            $frames[$key]['total'] = $total;
        }
        $this->params['frames'] = $frames;
        $this->params['total'] = $total;
    }

    public function __construct()
    {
        $this->constructFrames();
    }

    /**
     * Construct Frames
     */
    protected function constructFrames()
    {
        $frame = array(
            'throw1' => array(
                'value'   => null,
                'pinfall' => null
            ),
            'throw2' =>  array(
                'value'   => null,
                'pinfall' => null
            ),
            'score'  => null,
            'total'  => null
        );
        for ($i=1; $i<=10; $i++) {
            if ($i == 10) {
                $frame['throw3'] =  array(
                    'value'   => null,
                    'pinfall' => null
                );
            }
            $this->frames[$i] = $frame;
        }
        return $this;
    }


    /**
     * Set laneId
     *
     * @param Pincrowd\ApiBundle\Document\Lane $laneId
     * @return \Game
     */
    public function setLaneId($laneId)
    {
        $this->laneId = $laneId;
        return $this;
    }

    /**
     * Get laneId
     *
     * @return string $laneId
     */
    public function getLaneId()
    {
        return $this->laneId;
    }

    /**
     * Set match
     *
     * @param Pincrowd\ApiBundle\Document\Match $match
     * @return \Game
     */
    public function setMatch(\Pincrowd\ApiBundle\Document\Match $match)
    {
        $this->match = $match;
        return $this;
    }

    /**
     * Get match
     *
     * @return Pincrowd\ApiBundle\Document\Match $match
     */
    public function getMatch()
    {
        return $this->match;
    }

    /**
     * Set username
     *
     * @param string $username
     * @return \Game
     */
    public function setUsername($username)
    {
        $this->username = $username;
        return $this;
    }

    /**
     * Get username
     *
     * @return Pincrowd\ApiBundle\Document\User $username
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Add frames
     *
     * @param $frames
     */
    public function addFrames($frames)
    {
        $this->frames[] = $frames;
    }

    /**
     * Get frames
     *
     * @return Doctrine\Common\Collections\Collection $frames
     */
    public function getFrames()
    {
        return $this->frames;
    }

    /**
     * Add throws
     *
     * @param $throws
     */
    public function addThrows($throws)
    {
        $this->throws[] = $throws;
    }

    /**
     * Get throws
     *
     * @return Doctrine\Common\Collections\Collection $throws
     */
    public function getThrows()
    {
        return $this->throws;
    }

    /**
     * Set score
     *
     * @param integer $score
     * @return \Game
     */
    public function setScore($score)
    {
        $this->score = $score;
        return $this;
    }

    /**
     * Get score
     *
     * @return integer $score
     */
    public function getScore()
    {
        return $this->score;
    }

    /**
     * Set dateStarted
     *
     * @param date $dateStarted
     * @return \Game
     */
    public function setDateStarted($dateStarted)
    {
        $this->dateStarted = $dateStarted;
        return $this;
    }

    /**
     * Get dateStarted
     *
     * @return date $dateStarted
     */
    public function getDateStarted()
    {
        return $this->dateStarted;
    }

    /**
     * Set dateEnded
     *
     * @param date $dateEnded
     * @return \Game
     */
    public function setDateEnded($dateEnded)
    {
        $this->dateEnded = $dateEnded;
        return $this;
    }

    /**
     * Get dateEnded
     *
     * @return date $dateEnded
     */
    public function getDateEnded()
    {
        return $this->dateEnded;
    }

    /**
     * Get id
     *
     * @return id $id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set active
     *
     * @param boolean $active
     * @return \Game
     */
    public function setActive($active)
    {
        $this->active = $active;
        return $this;
    }

    /**
     * Get active
     *
     * @return boolean $active
     */
    public function getActive()
    {
        return $this->active;
    }


    /**
     * Set frames
     *
     * @param hash $frames
     * @return \Game
     */
    public function setFrames($frames)
    {
        $this->frames = $frames;
        return $this;
    }

}
