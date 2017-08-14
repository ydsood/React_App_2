import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//Mapping of state reducers
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
