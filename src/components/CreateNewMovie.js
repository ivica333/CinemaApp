import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory,Link } from "react-router-dom";
import {useDropzone} from 'react-dropzone';
import { createMovie } from "../actions";
import '../style/createMovie.scss';

const CreateNewMovie = () => {
    let token = localStorage.getItem("token")
    const history = useHistory()
    const [movieData,setMovieData] = useState({
          title:"",year:""
    })
    const dispatch = useDispatch()


    const getImage = (file) => {
     if(file[0] != undefined){
        const curentFile = file[0]
        const reader = new FileReader()
        reader.addEventListener("load",() => {
          console.log(reader.result);
        },false)
        return reader.readAsDataURL(curentFile)

     }
    }
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({accept: 'image/*',onDrop:() => getImage(acceptedFiles)});
    

    const handleChanges = (e) => {
       setMovieData({...movieData,
        [e.target.name]:e.target.value
      })
      }
      
    const submitForm = (e) => {
       e.preventDefault()
       dispatch(createMovie(token,movieData)); 
       history.push("/movielist")
    }  

    const cancelCreate = () => {
      history.push("/movielist")
   }  

  return (
    <div className="col-md-4">
      <div className="">
						 <div className="">
							  <h1>Create new movie</h1>
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
                <p>Drop image here</p>
              </div>
           </div>
           <div className="row">
             <div className="col-md-6">
               <button onClick={() => cancelCreate()} className="btn btn-cancel btn-block">Cancel</button>
             </div>
             <div className="col-md-6">
               <button type="submit" className="btn btn-create btn-block btn-primary">Create</button>
             </div>
           </div>
         </form>
    </div>
  );
}

export default CreateNewMovie;