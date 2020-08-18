import React from 'react';
import { Provider } from "react-redux";
import LoginPage from "./components/LoginPage";
import MovieList from "./components/MovieList";
import CreateNewMovie from "./components/CreateNewMovie";
import EditMovie from "./components/EditMovie";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>  
      <Router>
       <div>
        <Switch>  
          <Route path="/" exact component={LoginPage} />  
          <Route path="/movielist" component={MovieList} />
          <Route path="/createmovie" component={CreateNewMovie} /> 
          <Route path="/editmovie/:id" component={EditMovie} /> 
        </Switch>   
       </div>
      </Router> 
    </Provider>  
  );
}

export default App;
