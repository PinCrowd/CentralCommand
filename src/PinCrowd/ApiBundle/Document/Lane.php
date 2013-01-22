<?php
namespace Pincrowd\ApiBundle\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @package
 * @category
 */
/**
 * @package
 * @category
 *
 * @MongoDB\Document
 */
class Lane
{
    /**
     * @var mixed
     * @MongoDB\Id
     */
    protected $id;

    /**
     * @var
     * @MongoDB\ReferenceOne(targetDocument="Match")
     */
    protected $match;

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
     * Set match
     *
     * @param Pincrowd\ApiBundle\Document\Match $match
     * @return \Lane
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
}
