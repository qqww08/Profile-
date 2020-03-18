import React,{ Component } from "react"
import html5 from "../images/html5.svg";
import css3 from "../images/css3.svg";
import js from "../images/js.svg";
import material from "../images/material.svg";
import node from "../images/node.svg";
import react from "../images/react.svg";
import "../css/skill.css";


class Skill extends Component{
    
    render(){
       
        return(
            <div>
                <ul className="skill">
                    <li><img src={html5}/></li>
                    <li><img src={css3}/></li>
                    <li><img src={js}/></li>
                    <li><img src={react}/></li>
                    <li><img src={node}/></li>
                    <li><img src={material}/></li>
                </ul>
            </div>
        )
    }
}
export default Skill;