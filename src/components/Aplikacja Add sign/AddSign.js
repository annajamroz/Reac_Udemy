// Przycisk po kliknieciu którego dodawa jest litera do tekstu
// setState - przekazanie do metody obiektu i funkcji
//  Definiowanie state w konstruktorze

import React from "react"
import PanelResult from "./PanelResult"


export default class AddSign extends React.Component {

    state = {
        text: "aa",
        btn: 'uruchom'
    }

    handleClick = () => {
        const number = Math.floor(Math.random() * 10)
        this.setState({
            text: this.state.text + number,
        })
    }



    render() {
        const btnName = 'stwórz liczbę'
        return (
            <>
            <button onClick={this.handleClick}> {this.state.btn}</button>
            <PanelResult text={this.state.text}>bbbb</PanelResult>
            </>

        )
    }
}