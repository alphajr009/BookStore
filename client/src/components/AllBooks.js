import React, { useState, useEffect } from 'react';
import '../css/allbooks.css';
import axios from 'axios';

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = (await axios.get("/api/books/getallbooks")).data;

          setBooks(response.books);
          console.log(response)

      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchBooks();
  }, []);

 const handleDelete = async (ISBN) => {
    try {
      const response = await axios.patch("/api/books/deletebook", { ISBN });

      if (response.status === 200) {
    
        setBooks((prevBooks) => prevBooks.filter((book) => book.ISBN !== ISBN));
        console.log(response.data); 
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className='all-books-table'>
      <h2>All Books</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}> 
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.ISBN}</td>
              <td>
                <button className='btn-remove' onClick={() => handleDelete(book.ISBN)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBooks;
