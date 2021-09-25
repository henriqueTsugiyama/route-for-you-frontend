import React from "react";
import { Container } from "./styles";


export const CoordinatesInput = ({props}) => {
    return ( 
        <Container>
            <p>{props.coordinates[0]}</p>
            <input ></input>
            <p>{props.coordinates[1]}</p>

            <input ></input>

            {/* <button>Click me</button> */}
        </Container>
    )
}