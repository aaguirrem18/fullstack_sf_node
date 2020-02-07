<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use App\Entity\User;
use App\Repository\UserRepository;


class UserController extends AbstractController
{
    /**
     * @Route("/api/user", name="user")
     */
    
    /**
    * @var UserRepository
    */
    private $userRepository;


    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }


    public function index()
    {
        return new JsonResponse("api working !!",JsonResponse::HTTP_OK);
    }
    
    public function userProfile(string $email)
    {
        try {
            $user = $this->userRepository->findOneByEmail( $email );
            return new JsonResponse($user,JsonResponse::HTTP_OK);
        } catch (\Throwable $th) {
            return new JsonResponse(array('message'=>'User not found !!', 'code' => '404'),JsonResponse::HTTP_NOT_FOUND);

        }
    }

    public function postUser( Request $request ,UserPasswordEncoderInterface $encoder)
    {
        $data = json_decode($request->getContent());

        //$user = $this->userRepository->findOneByEmail( $data->$email );

        $user = new User();
        $user->setEmail($data->email);
        $user->setPassword($data->password);
        $user->setRoles($data->roles);

        $this->encodePassword($user, $encoder);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse(array('status'=>'user Added !!'),JsonResponse::HTTP_CREATED);

    }

    public function putBook( string $email , Request $request)
    {
        $data = json_decode($request->getContent());
        $user = $this->userRepository->findOneByEmail( $email );

        if ($user) {

            $user->setEmail($data->email);
            $user->setPassword($data->password);
            $user->setRoles($data->roles);

            $this->encodePassword($user, $encoder);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
    
            return new JsonResponse(array('message'=>'User updated !!'),JsonResponse::HTTP_OK);
        } else {
            return new JsonResponse(array('message'=>'User not found !!'),JsonResponse::HTTP_NOT_FOUND);
        }
    }

    public function deleteUser(string $email)
    {


        var_dump($email);
        
        $user = $this->userRepository->remove( $email );

        if ($user) {
            return new JsonResponse(array('message'=>'User deleted !!', 'code' => '200'),JsonResponse::HTTP_OK);
        } else {
            return new JsonResponse(array('message'=>'User not found !!', 'code' => '404'),JsonResponse::HTTP_NOT_FOUND);
        }
    }
    
    protected function encodePassword(User $data, UserPasswordEncoderInterface $encoder): User
    {
        $encoded = $encoder->encodePassword($data, $data->getPassword());
        $data->setPassword($encoded);

        return $data;
    }

}
