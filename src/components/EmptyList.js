import React from 'react';
import { Link } from "react-router-dom";

const EmptyList = () => {

  return (
    
         <div className="col-md-6">
           <div className="card">
              <div className="card-body">
                <div className="row">
                 <div className="col-sm-12 col-md-12 text-center">
                  <h1 className="card-title">Your movie list is empty</h1>
                 </div>
                 <div className="col-sm-8 col-md-6 offset-md-3 offset-sm-2">                  
                  <Link to="/createmovie" className="btn btn-block">Create a new movie</Link>
                </div>
                </div>
              </div>
           </div>
         </div>
  
  );
}

export default EmptyList;