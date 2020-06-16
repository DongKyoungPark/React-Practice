import React, { Component } from "react";
import "./index.scss";
import Child from "./Child";

class index extends Component {
    constructor() {
        super();

        this.state = {
            text: "ABC",
            number: 10,
            userInput: "",
        };
    }

    clickHandler = () => {
        this.setState({ text: "DEF" });
    };

    changeHandler = (e) => {
        console.log("event: ", e.target.value);
        this.setState({ userInput: e.target.value });
    };

    render() {
        //setState 변경값을 확인은 여기에서!
        console.log("render: ", this.state.text);
        return (
            <div className="state">
                <div className="state-header">State / Props 연습!!</div>
                <div onClick={this.clickHandler} className="state-contents">
                    {this.state.text}
                </div>
                <input onChange={this.changeHandler} type="text"></input>
                <Child userInput={this.state.userInput} />
                {/* onClick로 함수를 자식으로 넘겨줄 수 있음 */}
            </div>
        );
    }
}

export default index;
