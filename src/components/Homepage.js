import AddBook from './Newbook';
import Differentbooks from './Bookz';

const BooksPage = (prop) => {
  const { data } = prop;

  return (
    <>
      <div className="books-container d-flex">
        <div>
          {data.map((book) => (
            <Differentbooks key={book.id} title={book.title} author={book.author} id={book.id} />
          ))}
        </div>
      </div>
      <AddBook />
    </>
  );
};

export default BooksPage;
