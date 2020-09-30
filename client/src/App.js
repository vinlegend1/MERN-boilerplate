import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Navbar />

      <Route path="/" exact component={Home}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/main" exact component={Main}></Route>
    </Router>
  );
}

export default App;
