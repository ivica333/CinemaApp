import { combineReducers } from 'redux';
import loginUser from './loginUser';
import getMovies from './getMovies';

const rootReducer = combineReducers({
  login:loginUser,
  movies:getMovies
})

export default rootReducer