

export default class Basket extends React.Components {
    state = {
        availableProducts: 7,
        shopingCard: 0,
    }

    handleRemoveFromCard = () => {
        this.setState({
            shopingCard: this.state.shopingCard - 1
        })
    }

    handleAddToCard =() => {
        this.setState({
            shopingCard: this.state.shopingCard
        })
    }

    handleBuy = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shopingCard,
            shopingCard: 0
        })
    }



    render() {
        const {shopingCard, availableProducts} = this.state

        const style = shopingCard === 0 ? {opacity: 0.3}:{}        

        return(
           <>
            <button 
                disable={shopingCard ? false:true}
                onClick={this.handleRemoveFromCard}>-</button>

            <span style={style}> {shopingCard} </span>

            <button
                disable={shopingCard === availableProducts ? true:false}
                onClick={this.handleAddToCard}>+</button>

            {shopingCard > 0 && <button onClick={this.handleBuy}>Kup teraz</button>}
           </>
        )
    }

}