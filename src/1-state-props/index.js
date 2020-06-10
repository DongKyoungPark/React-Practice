import React, { Component } from "react";
import "./index.scss";

class index extends Component {
    constructor() {
        super();

        this.state = {
            text: "ABC",
            number: 10,
            userInput: ""
        };
    }

    clickHandler = () =>{
        this.setState({text:"DEF"});
    };

    changeHandler = (e) =>{
        console.log("event: ", e.target.value);
        this.setState({userInput:e.target.value});
    };

    render() {
        console.log("render: ", this.state.text);
        return (
            <div className="state">
                <div className="state-header">State / Props 연습!!</div>
                <div onClick={this.clickHandler} className="state-contents">{this.state.text}</div>
                <input onChange={this.changeHandler} type="text"></input>
            </div>
        );
    }
}

export default index;
