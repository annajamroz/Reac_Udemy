import React from "react"

const PositiveMessage = () => <p>Możesz obejżeć ten film</p>
const NegativeeMessage = () => <p>Nie możesz obejrzć tego fimu</p>

export default class ChechboxAgeConfirmation extends React.Component {
    state= {
        isComfirmed: false,
        
    }


handleCheckboxChange =() => {
    this.setState({
        isComfirmed: !this.state.isComfirmed
    })
}

displayMessage = () => {
    if (this.state.isComfirmed){
        return <PositiveMessage/>
    } else {
        return <NegativeeMessage/>
    }
}


render(){
    return(
        <>
        <h1>Kup bilet an horror roku!</h1>
        <input type="checkbox" id="age" checked={this.state.isComfirmed} onChange={this.handleCheckboxChange} />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.displayMessage()}
       

        
        </>

    )
}
}