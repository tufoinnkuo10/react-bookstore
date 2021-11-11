import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/books';

const Differentbooks = (prop) => {
  const { title, category, id } = prop;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      {title}
      {category}
      <button type="button" onClick={() => removeBookFromStore(id)}>Remove</button>
    </div>
  );
};

export default Differentbooks;
