import { useSelector } from 'react-redux';
import AddBook from './Newbook';
import Differentbooks from './Bookz';

// book section
const Booksec = () => {
  const { booksReducer } = useSelector((state) => state);

  return (
    <>
      <div className="books-container d-flex">
        <div>
          {booksReducer.map((book) => (
            <Differentbooks
              key={book.id}
              title={book.title}
              category={book.category}
              id={book.id}
            />
          ))}
        </div>
      </div>
      <AddBook />
    </>
  );
};

export default Booksec;
