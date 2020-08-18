import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory,Link } from "react-router-dom";
import { deleteMovie } from "../actions";


const EmptyList = ({movies}) => {
const  dispatch = useDispatch()
const history = useHistory()
let token = localStorage.getItem("token")

const edit = (id) => {
   history.push(`/editmovie/${id}`)
}

return (

<div className="table-responsive">
   <div className="">
			<h1>Movies</h1>
	 </div>
 <table class="table">
  <thead>
    <tr>
      <th>Movie title</th>
      <th>Publication year</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
       {movies.map(movie => <tr key={movie.id}>
        <td>{movie.title}</td>
        <td>{movie.year}</td>
        <td> <Link onClick={() => dispatch(deleteMovie(token,movie.id))}>Delete </Link>
        <Link onClick={() => edit(movie.id)}>Edit</Link>
        </td>
         </tr>)}
  </tbody>
 </table>
</div>
  );
}

export default EmptyList;