import React, { useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  useEffect(() => {
    //openPage('home-page');
  }, []);

  return (
    <div className="App">
      <Router>
        {/*This checkbox controls the visible state of the navbar. it is not displayed, only used as a toggle-->*/}
        <input type="checkbox" name="nav" id="nav_button"/>

        <div className="body">
          {/*Hamburger Button. remains on all pages*/}
            <div className="navbar">
                <label htmlFor="nav_button" className="open_nav">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </label>
            </div>

          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact}/>
          </Switch>
        </div>

        <div className="side_nav">
            <br/>
            <label htmlFor="nav_button" className="close_nav">X</label>
            <br/>
            <br/>
          <Link onClick={closeMenu()} to="/"><label htmlFor="nav_button" className="nav_link">Home</label></Link>
          <Link to="/about"><label htmlFor="nav_button" className="nav_link">About</label></Link>
          <Link to="/contact"><label htmlFor="nav_button" className="nav_link">Contact</label></Link>
          
        </div>
      </Router>
    </div>
  );
}

function closeMenu(){
  //document.getElementById('nav_button').click();
}

export default App;
