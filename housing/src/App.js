import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Listings from './components/Listings'
import CreateListing from './components/CreateListing'
import Register from './components/Register'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/browse" exact component={Listings} />
      <Route path="/newListing" exact component={CreateListing} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
}

export default App;
