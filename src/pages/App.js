import React, { Component } from 'react';
import "../css/App.css";
import Header from "./Header.js";
import Body from "./Body.js";
import Profile from "./Profile.js";
import Skill from "./Skill.js";
import Contact from "./Contact.js"

class App extends Component{
  render(){
   
    
    return(
      <div>
        <div><Body/></div>
        <div><Header/></div>
        <div><Profile/></div>
        <div><Skill/></div>
        <div><Contact/></div>
      </div>
    );
  }
}

export default App;
