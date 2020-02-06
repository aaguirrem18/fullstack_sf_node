export interface Post {
    title: string;
    description: string;
    autor: string;
    anno: number;
    img: string;
    categorie: string;
  }


  //curl -X PUT "http://booksapi.test/api/books/4" -H "accept: application/json" -H "Content-Type: application/json" -d 
  //"{\"name\":\"fghfgh\",\"description\":\"fghfgh\",\"autor\":\"fghfgh\",\"anno\":4444,\"img\":\"\",\"categorie\":\"api/categories/1\"}"