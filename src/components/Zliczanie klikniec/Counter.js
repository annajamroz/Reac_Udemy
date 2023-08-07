import React from "react";

export default class Counter extends React.Component {

    // construktor(props){
    //     super(props)
    // }
    
    state = {
            count: 0,
            result: this.props.result
        }

   

        handleMathClick(type, number = 1) {
           
            if (type === 'substraction') {
                 this.setState(prevState => ({
                    count: prevState.count + 1,
                    result: prevState.result - number
            }))
            } else if(type =='reset') {
                this.setState(prevState => ({
                    count: prevState.count + 1,
                    result: 0
                }))
            } else if(type='addition'){
                this.setState(prevState => ({
                    count: prevState.count + 1,
                    result: prevState.result + number
                     }))
            }
           
        }
    
    render() {

        return(
            <>
            <button onClick={() => this.handleMathClick('substraction', 1)}>-1</button>
            <button onClick={this.handleMathClick.bind(this, 'reset')}>Reset</button>
            <button onClick={() => this.handleMathClick('addition', 1)}>+1</button>
            <h1>Liczba kliknięć: {this.state.count}</h1>
            <h2>Wynik: {this.state.result}</h2>
            </>

        )
    }
}