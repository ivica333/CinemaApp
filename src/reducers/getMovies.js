import { GET_MOVIES,CREATE_MOVIE,DELETE_MOVIE,UPDATE_MOVIE } from '../actions/types';

const initialState = {
    movieList:[],
    movieCreated:false,
    movieDeleted:true,
    isEdit:false
  }

const getMovies = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return {
          ...state,
          movieList:action.payload
        }
      case CREATE_MOVIE:
        return {
          ...state,
          movieCreated:action.payload
        }
        case DELETE_MOVIE:
        return {
          ...state,
          movieDeleted:action.payload
        }
        case UPDATE_MOVIE:
        return {
          ...state,
          isEdit:action.payload
        }
      default:
        return state
    }
  }

 

  export default  getMovies