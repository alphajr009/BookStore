import React, { useState } from 'react';
import axios from 'axios';
import '../css/addbook.css';

function AddNewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  async function addBook() {
    const newbook = {
      title,
      author,
      ISBN,
    };

    try {
      await axios.post('api/books/addbook', newbook);
      setShowNotification(true);

      // Reset form fields after successful submission
      setTitle('');
      setAuthor('');
      setISBN('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className='addnew-container'>
        <form action='/action_page.php'>
          <label htmlFor='title'>Book Title</label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Book Title..'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor='author'>Author</label>
          <input
            type='text'
            id='author'
            name='author'
            placeholder='Author..'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label htmlFor='ISBN'>ISBN</label>
          <input
            type='text'
            id='ISBN'
            name='ISBN'
            placeholder='ISBN..'
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
          />
        </form>
      </div>

      <button className='btn-addnew' onClick={addBook}>
        Add Book
      </button>

      {showNotification && (
        <div className='notification'>
          Book added successfully!
          <span className='close' onClick={() => setShowNotification(false)}>
            &times;
          </span>
        </div>
      )}
    </div>
  );
}

export default AddNewBook;
