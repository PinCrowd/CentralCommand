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
 * @MongoDB\Document
 */
class Phonenumber
{
    /**
     * @var string
     * @MongoDB\Id
     */
    protected $id;

    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    protected $label;
    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    protected $phonenumber;

    /**
     * Set label
     *
     * @param string $label
     * @return \Phonenumber
     */
    public function setLabel($label)
    {
        $this->label = $label;
        return $this;
    }

    /**
     * Get label
     *
     * @return string $label
     */
    public function getLabel()
    {
        return $this->label;
    }

    /**
     * Set phonenumber
     *
     * @param string $phonenumber
     * @return \Phonenumber
     */
    public function setPhonenumber($phonenumber)
    {
        $this->phonenumber = $phonenumber;
        return $this;
    }

    /**
     * Get phonenumber
     *
     * @return string $phonenumber
     */
    public function getPhonenumber()
    {
        return $this->phonenumber;
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
}
