import React, {useState, useEffect} from "react";
import { HeaderContainer, MainContainer, InputModal, Button, ButtonContainer, Calculate } from "./styles";
import { CoordinatesInput } from "../../components";

export const Home = () => {
    const [ inputs, setInputs ] = useState([
        { location: "sorocaba", coordinates: ['Latitude', 'Longitude' ]},
        
    ])

    function handleAdd() {
        console.log('added')
        setInputs([
            ...inputs,
            { location: "campinas", coordinates: ['Latitude', 'Longitude' ]},
        ])
    }
    function handleRemove() {
        console.log('removed')
        setInputs([
            { location: "campinas", coordinates: ['Latitude', 'Longitude' ]},
        ])
    }
    return (
        <MainContainer>
            <HeaderContainer>
                <h1>Route 4 you</h1>
                <p>This system is developed to help you find the best route to your destination!</p>
            </HeaderContainer>
            <InputModal>
                <p>Choose whether you want to add/remove routes</p>
                <ButtonContainer>
                    <Button onClick= {() => handleAdd()}>Add</Button>
                    <Button onClick= {() => handleRemove()}>Reset</Button>
                </ButtonContainer>
            
                {inputs.map((item, index) => (
                    <CoordinatesInput key={`${item.location}@${index}`} props={item}/>
                ))}
            </InputModal>
            <Calculate onClick={()=> { console.log(inputs) }}>
                Calculate
            </Calculate>
        </MainContainer>
    )
}