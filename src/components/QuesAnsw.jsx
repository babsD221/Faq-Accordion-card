import React from "react";
import "../App.css";
import ArrowDown from "../images/icon-arrow-down.svg";


class QuesAnsw extends React.Component {

    constructor(props) {
        super(props);
        this.answer = React.createRef();
        this.arrowImg = React.createRef();
        this.question= React.createRef();

        this.state = {
            actived: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

     handleClick() {
         this.setState(prevState =>({
             actived: !prevState.actived
         }));
             if(this.state.actived)
             {
                this.answer.current.style.display = "block";
                this.arrowImg.current.classList.add("activatedQues");
                this.question.current.classList.add("boldH4");
                console.log(this.arrowImg.current.classList);

             }
             else
             {
                this.answer.current.style.display = "none";
                this.arrowImg.current.classList.remove("activatedQues");
                this.question.current.classList.remove("boldH4");

             }




    }
    render() {
        return (
            <div className="row_ques">

            <div  className="question" onClick={this.handleClick} >
            <h5 ref={this.question}>{this.props.question}</h5>
                <img className="arrow-img" ref={this.arrowImg} src={ArrowDown} />
            </div>
            <div className="answer" ref={this.answer}>
                <p>{this.props.answer}</p>
            </div>

            </div>

        );
    }
}

export default QuesAnsw;