import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <p className="addtitle">ADD NEW BOOK</p>
      <div className="inputt">
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Book title"
        />
        <input
          type="text"
          name="author"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          placeholder="Category"
        />
        <button className="addbtn" type="submit">ADD BOOK</button>
      </div>

    </form>
  );
};

export default AddBook;
