import React, { Component } from "react";

class Child extends Component {
    render() {
        console.log("this.props: ", this.props);
        return <div>{this.props.userInput}</div>;
    }
}

export default Child;
