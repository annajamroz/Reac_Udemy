

export default function MathButton(props){
    console.log(props)
    return(
        <>
        <button onClick={() => props.click(props.type, props.number)}>{props.name}</button>
        </>

)
}
