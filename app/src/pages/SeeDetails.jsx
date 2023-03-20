import { Container } from '@mui/material';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import CardPokemon from '../components/CardPokemon';

const SeeDetails = () => {

    const params = useParams();
    console.log(params);

    const [listPokemon, setListPokemon] = useState(params);

    /* useEffect = () => {
     console.log(params);
 
 } */

    return (
        <Container maxWidth="sm">
            <CardPokemon listPokemon={listPokemon}></CardPokemon>
        </Container>
    )
}
export default SeeDetails;

