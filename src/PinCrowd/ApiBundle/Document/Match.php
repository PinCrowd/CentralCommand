<?php
namespace Pincrowd\ApiBundle\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @category   Pincrowd
 * @package    Library
 */
/**
 * @category   Pincrowd
 * @package    Library
 *
 * @MongoDB\Document
 */
class Match
{
    /**
     * @var string
     * @MongoDB\Id
     */
    protected $id;

    /**
     * @var Lane
     * @MongoDB\ReferenceOne(targetDocument="Lane")
     */
    protected $lane;

    /**
     * @var array[Game]
     *
     * @MongoDB\ReferenceMany(targetDocument="Game", cascade="{remove}")
     */
    protected $games = array();

    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    protected $currentPlayer;

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
     * Set lane
     *
     * @param Pincrowd\ApiBundle\Document\Lane $lane
     * @return \Match
     */
    public function setLane(\Pincrowd\ApiBundle\Document\Lane $lane)
    {
        $this->lane = $lane;
        return $this;
    }

    /**
     * Get lane
     *
     * @return Pincrowd\ApiBundle\Document\Lane $lane
     */
    public function getLane()
    {
        return $this->lane;
    }

    public function __construct()
    {
        $this->games = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add games
     *
     * @param Pincrowd\ApiBundle\Document\Game $games
     */
    public function addGames(Game $games)
    {
        $this->games[] = $games;
    }

    /**
     * Get games
     *
     * @return Doctrine\Common\Collections\Collection $games
     */
    public function getGames()
    {
        return $this->games;
    }

    /**
     * Set currentPlayer
     *
     * @param string $currentPlayer
     * @return \Match
     */
    public function setCurrentPlayer($currentPlayer)
    {
        $this->currentPlayer = $currentPlayer;
        return $this;
    }

    /**
     * Get currentPlayer
     *
     * @return string $currentPlayer
     */
    public function getCurrentPlayer()
    {
        return $this->currentPlayer;
    }

    /**
     * Delete game
     * @param string $gameId
     */
    public function deleteGame($gameId)
    {

    }

}
