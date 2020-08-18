import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { myMovies } from "../actions";
import EmptyList from "./EmptyList";
import MovieTable from "./MovieTable";

const MovieList = () => {

    const movies = useSelector(state => state.movies.movieList)
    const dispatch = useDispatch()
    let token = localStorage.getItem("token")
    useEffect(() => {
      dispatch(myMovies(token))
    },[movies])

  return (
    <div className="container-fluid">
      <div className="row">
         {movies.length < 1 ? <EmptyList />:<MovieTable movies={movies}/> }
      </div>
    </div>
  );
}

export default MovieList;