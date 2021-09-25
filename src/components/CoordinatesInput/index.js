import React from "react";
import { Container } from "./styles";


export const CoordinatesInput = ({props}) => {
    return ( 
        <Container>
            <label>{props.coordinates[0]}</label>
            <input ></input>
            <label>{props.coordinates[1]}</label>

            <input ></input>

            {/* <button>Click me</button> */}
        </Container>
    )
}