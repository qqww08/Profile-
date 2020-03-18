import React, { Component } from 'react';
import Menu from "../images/menubar.svg";
import Button from "@material-ui/core/Button"
import "../css/header.css";


class Header extends Component{
  render(){
    return(
      <nav className="body">
        {/* header */}
        <div className="header_">
          <ul className="head_left">
            <li><a href="#"><Button color="primary">Home</Button></a></li>
          </ul>
          <ul className="head_medium">
            <li><a href="#"><Button color="black">About</Button></a></li>
            <li><a href="#"><Button color="black">Skill</Button></a></li>
            <li><a href="#"><Button color="black">Contect</Button></a></li>   
            <li><a href="#"><Button color="black">Border</Button></a></li>    
          </ul>
          <ul className="head_right">
            <li><a href="#"><Button variant="outlined">Sign In</Button></a></li>
            <li><a href="#"><Button variant="outlined">Sign Up</Button></a></li>
          </ul>
          <a href=""  className="menu_bar" >
            <img src={Menu}/>
          </a>
        </div> 
        
      </nav>
    )
  }
}
export default Header;
