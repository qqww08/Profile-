import React, { Component } from 'react';
import images from "../images/back.jpg";
import "../css/profile.css";

class Profile extends Component{
  render(){
    return(
      
        <div className="profile_flex">  
         
            <img src={images} className="profile_img"/> 
          
          <div className="profile_text">
            <p>안녕하세요 홍길도 입니다 열심히 합니다 저는 아주 많이</p>
          </div>
        </div>
        
    );
  }
}

export default Profile;