import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Differentbooks = (prop) => {
  const { title, author, id } = prop;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      {title}
      {author}
      <button type="button" onClick={() => removeBookFromStore(id)}>Remove</button>
    </div>
  );
};

export default Differentbooks;
