 export default class ListItems extends React.Components {
    state ={
        items: ["jabłko", "śliwka", "gruszka"]
    }

    render() {
        return(
            <ul>{this.state.items.map((item) => {<li key={item}>{`owoc ${item}`}</li>})}</ul>
        )
    }
 }