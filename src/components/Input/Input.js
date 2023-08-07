import React from "react";

export default class Input extends React.Component {
    state = {
        value: "",
    }

    handleInputChange = (e) => {
        console.log("Zawartość w evencie: " + e.target.value)
        console.log("Zawartość value  przed setState: " + this.state.value);
        this.setState({
            value: e.target.value
    })
    }

    handleButtonClick = () => {
         this.setState({
            value: ""})
    }

    render() {

        console.log("Zawartość value w trakcie render: " + this.state.value)
        return (
        <>
        <input value={this.state.value} placeholder="wpisz..." onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleButtonClick}>Reset</button>
        <h1>{this.state.value.toUpperCase()}xx</h1>
        </>
    )}
}