import React from "react"

export default function PanelResult(props) {
    return(
        <h1>{props.text}: {props.children}</h1>
    )
}