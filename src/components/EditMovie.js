import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams,useHistory } from "react-router-dom";
import {useDropzone} from 'react-dropzone';
import { updateMovie } from "../actions";


const EditMovie = () => {
    let token = localStorage.getItem("token")
    let  id  = useParams()
    const history = useHistory()
    const [movieData,setMovieData] = useState({
          title:"",year:""
    })
    const movieToUpdate = useSelector(state => state.movies.movieList.filter(movie => movie.id == id.id))
    const dispatch = useDispatch()

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({accept: 'image/*'});
    
    useEffect(() => {
      setMovieData({...movieData,
        title:movieToUpdate[0].title,year:movieToUpdate[0].year
      })  
    },[id.id])

    const handleChanges = (e) => {
       setMovieData({...movieData,
        [e.target.name]:e.target.value
      })
      }
      
    const submitForm = (e) => {
       e.preventDefault()
       dispatch(updateMovie(token,id.id,movieData)); 
       history.push("/movielist")  
    }  

    const cancelUpdate = () => {
      history.push("/movielist")
   }

  return (
    <div className="col-sm-8 col-md-4">
      <div className="">
						 <div className="">
							  <h1>Edit movie</h1>
						 </div>
				 </div>
         <form onSubmit={submitForm}>
           <div className="form-group">
             <label htmlFor="title">Title*</label>
             <input type="text" name="title" value={movieData.title} onChange={(e) => handleChanges(e)}  className="form-control" id="title" required/>
           </div>
           <div className="form-group">
              <label htmlFor="year">Publication year</label>
              <input type="text" name="year" value={movieData.year} onChange={(e) => handleChanges(e)}  className="form-control" id="year"/>
           </div>
           <div className="dropzone">

              <div {...getRootProps()}>
               <input {...getInputProps()} />
                <p>Drag 'n' drop image here</p>
              </div>
           </div>
           <div className="row">
             <div className="col-md-6">
               <button onClick={() => cancelUpdate()}  className="btn btn-cancel btn-block btn-primary">Cancel</button>
             </div>
             <div className="col-md-6">
               <button type="submit" className="btn btn-block btn-primary">Update</button>
             </div>
           </div>
         </form>
    </div>
  );
}

export default EditMovie;