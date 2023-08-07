import React from 'react'


export default class Ctest extends React.Component {
    
state = {
  number: 0,
}

    render() {
        return (
            <section>
                <h2>Mój pierwszy komponent klasowy ze stanem number: {this.state.number} </h2>
            </section>
        )
    }

}