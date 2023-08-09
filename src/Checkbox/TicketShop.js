import React from "react"

// const PositiveMessage = () => <p>Możesz obejżeć ten film</p>
// const NegativeeMessage = () => <p>Nie możesz obejrzć tego fimu</p>

// const displayMessage = (isComfirmed, isFormSubmited) => {
//     if (isFormSubmited){
//         if (isComfirmed){
//             return <ValidationMessage txt="Możesz obejżeć ten film<"/>
//         } else {
//             return <ValidationMessage txt="Nie możesz obejrzć tego fimu<"/>
//         }
//     } else {return null}
// }


const ValidationMessage = (props) => {
    const {txt} = props
    return(
     <p>{props.txt}</p>
    )}

const OrderForm = (props) => {

    const {submit, isComfirmed, change} = props
    return(
    <form onSubmit={submit}>
            <input type="checkbox" id="age" checked={isComfirmed} onChange={change} />
            <label htmlFor="age">Mam co najmniej 16 lat</label>
            <br/>
            <button type="submit">Kup bilet</button>
        </form>
)}

export default class TicketShop extends React.Component {
    state= {
        isComfirmed: false,
        isFormSubmited: false,
        
    }


handleCheckboxChange = () => {
    this.setState({
        isComfirmed: !this.state.isComfirmed,
        isFormSubmited: false
    })
}

handleFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.isFormSubmited){
        this.setState({
                isFormSubmited: true
            })
    }
    

}

displayMessage = () => {
    if (this.state.isFormSubmited){
        if (this.state.isComfirmed){
            return <ValidationMessage txt="Możesz obejżeć ten film<"/>
        } else {
            return <ValidationMessage txt="Nie możesz obejrzć tego fimu<"/>
        }
    } else {return null}
}



render(){

    const {isComfirmed, isFormSubmited} = this.state
    console.log()

    return(
        <>
        <h1>Kup bilet an horror roku!</h1>
        <OrderForm 
            change={this.handleCheckboxChange} 
            submit={this.handleFormSubmit}
            checked={isComfirmed}
            />
        {this.displayMessage}
       

        
        </>

    )
}
}