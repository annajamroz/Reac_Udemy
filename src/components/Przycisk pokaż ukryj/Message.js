import React from "react";

export default class Message extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messageIsActive: false
        }
    }

    handleClick = () => {
        this.setState(() => ({ messageIsActive: !this.state.messageIsActive})    
      )}

    render (){
        console.log(this.state.messageIsActive)
        const text = 'Lorem'
        return(
            <>
            <button onClick={this.handleClick}>{this.state.messageIsActive ? 'Ukryj':'Pokaż'}</button>
            {this.state.messageIsActive ? <p>{text}</p> : null}
            </>
        )
    }
}
