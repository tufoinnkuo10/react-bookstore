import React from 'react';

const Booksec = () => (
  <>
    <div className="books-container d-flex">
      <h2>Book List</h2>
      <button type="button">Remove</button>
    </div>
    <input type="text" name="addBooks" placeholder="Enter Book Title" />
    <button type="button">Add Book</button>
  </>
);

export default Booksec;