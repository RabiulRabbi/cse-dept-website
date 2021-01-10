import React from 'react';
import './App.css';
import Cse from './Cse';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
function App() {
  return (
    <Router>
      <Header></Header>
        <Switch>
        <Route path="/login">
            <Login></Login>
            </Route>
        <Route path="/home">
            <Home></Home>
            </Route>
          <Route path="/cse">
            <Cse></Cse>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
