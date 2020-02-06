<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Categories;
use App\Entity\Book;

use App\Repository\BookRepository;
use App\Repository\CategoriesRepository;

use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;


//use booksImages\;


class BooksController extends AbstractController
{
    /**
     * @Route("/", name="books")
     */

    /**
    * @var BookRepository
    */
    private $bookEntity;
    
    /**
    * @var CategoriesRepository 
    */
    private $catRepository;

    public function __construct(BookRepository $bookEntity, CategoriesRepository $catRepository) {
        $this->bookEntity = $bookEntity;
        $this->catRepository = $catRepository;
    }



    //
    // METHODS GENERATED WITHOUT SWAGGER / API PLATFORM
    // OPTION 2
    // NOT USED
    
    public function index()
    {
        $package = new Package(new EmptyVersionStrategy());

        //booksImages\
       /* echo "<img src='".{{ assets('/books/libro.jpg') }}."'>";
        exit();
*/

        return new JsonResponse("api working !!",JsonResponse::HTTP_OK);

        /*return $this->render('books/index.html.twig', [
            'controller_name' => 'BooksController',
        ]);*/
    }
    
    public function getallBooks()
    {
        return new JsonResponse($this->bookEntity->findAll(),JsonResponse::HTTP_OK);
    }

    public function getBook(string $name)
    {
        return new JsonResponse($this->bookEntity->findBy(array('name' => $name )),JsonResponse::HTTP_OK);
    }

    public function postBook( Request $request )
    {
        $data = json_decode($request->getContent());

        $book = new Book();
        $book->setName($data->name);
        $book->setDescription($data->description);
        $book->setAutor($data->autor);
        $book->setAnno($data->anno);
        $book->setCategorie( $this->catRepository->find( $data->categorie ) );

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($book);
        $entityManager->flush();

        return new JsonResponse(array('status'=>'Book Added !!'),JsonResponse::HTTP_CREATED);

    }

    public function putBook( int $id , Request $request)
    {
        $data = json_decode($request->getContent());
        $book = $this->bookEntity->find( $id );

        if ($book) {

            $book->setName($data->name);
            $book->setDescription($data->description);
            $book->setAutor($data->autor);
            $book->setAnno($data->anno);
            $book->setCategorie( $this->catRepository->find( $data->categorie ) );
            
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($book);
            $entityManager->flush();
    
            return new JsonResponse(array('message'=>'Book updated !!'),JsonResponse::HTTP_OK);
        } else {
            return new JsonResponse(array('message'=>'Book not found !!'),JsonResponse::HTTP_NOTFOUND);
        }
    }

    public function deleteBook(int $id)
    {

        $book = $this->bookEntity->find( $id );

        if ($book) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($book);
            $entityManager->flush();

            return new JsonResponse(array('message'=>'Book deleted !!', 'code' => '200'),JsonResponse::HTTP_OK);
        } else {
            return new JsonResponse(array('message'=>'Book not found !!', 'code' => '404'),JsonResponse::HTTP_OK);
        }
    }

    public function getallCategories()
    {
        return new JsonResponse($this->catRepository->findAll(),JsonResponse::HTTP_OK);
    }

    public function getCategorie(int $id)
    {
        return new JsonResponse($this->catRepository->find( $id ),JsonResponse::HTTP_OK);
    }



}
