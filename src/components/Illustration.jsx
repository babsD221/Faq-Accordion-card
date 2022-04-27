import React from "react";
import "../App.css";
import BoxImage from "../images/illustration-box-desktop.svg";

class Illustration extends React.Component {
    render() {
        return (
            <div className="imageContainer">
                <img className="box-img" src={BoxImage} />
                <div className="woman-img">
                    
                </div>

            </div>
        );
    }
}

export default Illustration;