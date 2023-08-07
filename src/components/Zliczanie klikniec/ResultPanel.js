export default function ResultPanel(props){


    return(
        <>
            <h2>Liczba kliknięć: {props.count} {props.count  > 10? <span>Przeciążenie procesora</span>:null}</h2>
            <h2>Wynik: {props.count}</h2>
        </>
    )
}