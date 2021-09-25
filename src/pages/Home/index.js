import React, {useState, useEffect} from "react";
import { HeaderContainer, MainContainer, InputModal, Button, ButtonContainer, Calculate } from "./styles";
import { CoordinatesInput } from "../../components";
import { api } from "../../service/api";


export const Home = () => {
    //components states for inputs and api response
    const [ inputs, setInputs ] = useState([
        { location: "sorocaba", coordinates: ['Latitude', 'Longitude' ]},
        
    ])
    const [ calculation, setCalc ] = useState()

    //function that'll add routes to api fetch
    function handleAdd() {
        console.log('added')
        setInputs([
            ...inputs,
            { location: "campinas", coordinates: ['Latitude', 'Longitude' ]},
        ])
    }
    //function that'll reset routes 
    function handleRemove() {
        console.log('removed')
        setInputs([
            { location: "campinas", coordinates: ['Latitude', 'Longitude' ]},
        ])
    }

    //function that interacts with api
    async function fetchAPI() {
       const response =  await api.get('/');
       setCalc(response.data)
       console.log(response.data);
    }
    useEffect(()=> {
        fetchAPI()
    }, [])

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

            {/* Ternary operator to validate display of routes calculation */}
            {!calculation ?
            null :
            (<p>{calculation}</p>)
            }
        </MainContainer>
    )
}