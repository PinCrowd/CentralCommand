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
     * @var $mixed
     * @MongoDB\Id
     */
    protected $id;
    /**
     * @var string
     * @MongoDB\Field(type="string")
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
     * @var string
     * @MongoDB\Field(type="string")
     */
    protected $avatar;

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
     * Get id
     *
     * @return id $id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set username
     *
     * @param string $username
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
     * @return string $username
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
     * Set avatar
     *
     * @param string $avatar
     * @return \User
     */
    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;
        return $this;
    }

    /**
     * Get avatar
     *
     * @return string $avatar
     */
    public function getAvatar()
    {
        return $this->avatar;
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
