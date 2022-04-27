import React from "react"
import "../App.css"
import Illustration from "./Illustration";
import FaqContainer from "./FaqContainer";


class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <Illustration />
                <FaqContainer />
            </div>
        );
    }
}

export default Container;