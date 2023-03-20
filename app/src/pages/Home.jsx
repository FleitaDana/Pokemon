import React from 'react'
import BtnCustom from '../components/BtnCustom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container } from '@mui/material';
import TablePokemon from '../components/TablePokemon';

const Home = () => {

    const [listPokemon, setListPokemon] = useState([])
    const [pokemon, setPokemon] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon/"

    const Table = async (url) => { //funcion

        const response = await axios.get(url)
            .then((res) => {
                console.log(res.data.results)
                return res.data.results

            })
            .then((results) => { //nombre y url
                console.log(results)
                return Promise.all(results.map((res) => //Promise.all: después de hacer todas las => anteriores
                    axios.get(res.url))
                )
            })
            .then((results) => {
                console.log(results)
                setListPokemon(results.map((res) => res.data)
                )
            })
    }

    useEffect(() => {
        Table(url)
    }, [url])


    return (
        /*  <>
         <BtnCustom label={"mi button"}/>
         <BtnCustom label={"mi button"}/>
         </> */

        <Container maxWidth="sm" sx={{ bgcolor: '#b2a', mt: 2}}> 
           <TablePokemon listPokemon={listPokemon}></TablePokemon> 
        </Container>
    );
}
export default Home;