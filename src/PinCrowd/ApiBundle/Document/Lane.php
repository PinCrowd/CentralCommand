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
     * @var array[Game]
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

}
