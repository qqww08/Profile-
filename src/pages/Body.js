import React, { Component } from 'react';
import images from "../images/back.jpg";
import "../css/body.css";


class body extends Component{
    render(){
        return(
            <div>
                <div className="Size"><img src={images} className="img_size"/>
                    <span className="Text_1">qrwqrqrqddddddddddd
                        fffffffffffffffffffffffffffwrwq</span>
                       
                    </div>
            </div>
        );
    }
}
export default body;