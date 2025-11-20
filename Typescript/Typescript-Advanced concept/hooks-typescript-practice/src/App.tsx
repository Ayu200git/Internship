import ShoppingCard from "./components/shopping-cart";
// import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.css";
// import Loader  from "./components/loader/loader";
// import Book from "./components/books/book";
// import Books from "./components/books/books";

// export type Book = {
//   id: number;
//   title: string;
//   author: string;
// };

// export const fetchRandomBook = async () => {
//   const response = await  axios.get("/api/books/random");
//   return response.data;
// };

// export const fetchData = async () => {
//   const response = await axios.get(`/api/books?limit=${count}`);
//   return response.data;
// };

function App() {
  // const [book, setBook] = useState();

  // useEffect(() => {
  //   fetchRandomBook().then(setBook);
  // }, []);

  

  return (
    <main>
      <ShoppingCard />
    </main>
    // <main className="w-full max-w-2xl py-16 mx-auto">
    //   <Book title={book.title} author={book.author}/>
    // </main>
    
  );
}

export default App;
