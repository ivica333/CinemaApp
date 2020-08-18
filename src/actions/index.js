import { LOGIN_USER,GET_MOVIES,CREATE_MOVIE,DELETE_MOVIE,UPDATE_MOVIE} from './types';
import API from "../services/api";
 
 export const login = (userInfo) => dispatch => {
  API.loginUser(userInfo).then(res =>{
      if (res.status == 200) {
        localStorage.setItem("token",res.data.jwt)
        dispatch({
            type:LOGIN_USER,
            payload:true
          })  
      }
  })
 }

 export const myMovies = (token) => dispatch => {
    API.getMovies(token).then(res =>{
        dispatch({
            type:GET_MOVIES,
            payload:res.data
          })  
    })
   }

   export const createMovie = (token,movieData) => dispatch => {
    API.createMovie(token,movieData).then(res =>{
        dispatch({
            type:CREATE_MOVIE,
            payload:true
          })  
    })
   }

   export const deleteMovie = (token,id) => dispatch => {
    API.deleteMovie(token,id).then(res =>{
        console.log("del "+res);
        
        dispatch({
            type:DELETE_MOVIE,
            payload:true
          })  
    })
   }

   export const updateMovie = (token,id,movieData) => dispatch => {
    API.updateMovie(token,id,movieData).then(res =>{
        
        dispatch({
            type:UPDATE_MOVIE,
            payload:true
          })  
    })
   }