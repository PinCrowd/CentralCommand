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
class User
{
    /**
     * @var string
     * @MongoDB\Id(strategy="NONE")
     */
    protected $username;

    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    protected $firstname;

    /**
     * @var string
     * @MongoDB\Field(type="string")
     */
    protected $lastname;

    /**
     * @var array
     * @MongoDB\EmbedMany(targetDocument="Email")
     */
    protected $email = array();
    /**
     * @var array
     * @MongoDB\EmbedMany(targetDocument="Phonenumber")
     */
    protected $phonenumber = array();
    public function __construct()
    {
        $this->email = new \Doctrine\Common\Collections\ArrayCollection();
        $this->phonenumber = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set username
     *
     * @param custom_id $username
     * @return \User
     */
    public function setUsername($username)
    {
        $this->username = $username;
        return $this;
    }

    /**
     * Get username
     *
     * @return custom_id $username
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set firstname
     *
     * @param string $firstname
     * @return \User
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
        return $this;
    }

    /**
     * Get firstname
     *
     * @return string $firstname
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set lastname
     *
     * @param string $lastname
     * @return \User
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
        return $this;
    }

    /**
     * Get lastname
     *
     * @return string $lastname
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Add email
     *
     * @param Pincrowd\ApiBundle\Document\Email $email
     */
    public function addEmail(\Pincrowd\ApiBundle\Document\Email $email)
    {
        $this->email[] = $email;
    }

    /**
     * Get email
     *
     * @return Doctrine\Common\Collections\Collection $email
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Add phonenumber
     *
     * @param Pincrowd\ApiBundle\Document\Phonenumber $phonenumber
     */
    public function addPhonenumber(\Pincrowd\ApiBundle\Document\Phonenumber $phonenumber)
    {
        $this->phonenumber[] = $phonenumber;
    }

    /**
     * Get phonenumber
     *
     * @return Doctrine\Common\Collections\Collection $phonenumber
     */
    public function getPhonenumber()
    {
        return $this->phonenumber;
    }
}
