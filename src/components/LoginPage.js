import React, { useState,useEffect }from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../actions";
import '../style/login.scss';

const LoginPage = () => {
 
    let loginError = useSelector(state => state.login.loginError)
    const dispatch = useDispatch()
    const history = useHistory()
    const [userInfo,setUserInfo] = useState({
      identifier:"",
      password:""
    })
      useEffect(() => {
        if (loginError) {
          history.push("/movielist")
        }
      },[loginError])
      
    const handleChanges = (e) =>{
      setUserInfo({...userInfo,
        [e.target.name]:e.target.value
      }) 
    }

    const submitForm = (e) =>{
      e.preventDefault()
        dispatch(login(userInfo)) 
    } 

   

  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-8 col-md-4">
         <div>
						 <div className="login-title">
							  <h1>Login</h1>
						 </div>
				 </div>
         <form onSubmit={submitForm}>
           <div className="form-group">
             <label htmlFor="Email">Email*</label>
             <input type="email" name="identifier" value={userInfo.identifier} onChange={(e) => handleChanges(e)} className="form-control" id="Email" required/>
           </div>
           <div className="form-group">
              <label htmlFor="Password">Password*</label>
              <input type="password" name="password" value={userInfo.password} onChange={(e) => handleChanges(e)} className="form-control" id="Password" required/>
           </div>
           <button type="submit" className="btn btn-block ">Sign in</button>
         </form>
      </div>
    </div>
  </div>
  );
}

export default LoginPage;