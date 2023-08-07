import React from "react"
import ItemList from "./ItemList"

export default class ShopingList extends React.Component {

    state = {
        items1: 'ogórki',
        items2: "sok",
        items3: 'coś do jedzenia'

    } 

    render() {
        return(
            <div>
                <h1>Lista zakupów</h1>
                <ul>
                    <ItemList quantity={1} name={this.state.items1}/>
                    <ItemList name={this.state.items2}/>
                    <ItemList name={this.state.items3}/>
                </ul>
            </div>

        )
    }
}