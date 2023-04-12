import React from 'react'
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import TablePokemon from '../components/TablePokemon';
import { getPokemones, getPokemonesById } from '../api/apis';
import { useParams } from 'react-router-dom';

const Home = () => {

    const paramsId = useParams();
    const [listPokemon, setListPokemon] = useState([])
    const [pokemonImage, setPokemonImage] = useState('');

    useEffect(() => {
        getPokemones()
            .then((res) => {
                setListPokemon(res.data.results)
            })

            // getPokemonesById(paramsId.id)

            // .then((res) => {
            //     setPokemonImage(res.data.sprites.other.home.front_default)
            // })
            
    }, [])

    return (
        <div className='background-table'>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                p="20"
            > 
                <Grid item 
                justifyContent="center" 
                alignItems="center"
                xs={12} md={12} lg={12} 
                sx={{margin: 2}}>
                <TablePokemon 
                listPokemon={listPokemon}>
                </TablePokemon>
                </Grid>
            </Grid>
        </div>
    );
}
export default Home;