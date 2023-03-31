import React from 'react'
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import TablePokemon from '../components/TablePokemon';
import { getPokemones } from '../api/apis';
import Searcher from '../components/Searcher';

const Home = () => {

    const [listPokemon, setListPokemon] = useState([])

    useEffect(() => {

        getPokemones()
            .then((res) => {
                setListPokemon(res.data.results)
            })

    }, [])

    return (
        /*  <>
         <BtnCustom label={"mi button"}/>
         <BtnCustom label={"mi button"}/>
         </> */

        //  En xs agregamos los etsilos
        <div className='fondo-table'>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                xs={12} md={12} lg={12}
                p="20"
            >
                <Grid item 
                justifyContent="center" 
                alignItems="center"
                xs={12} md={12} lg={12} 
                sx={{margin: 3}}>
                <TablePokemon listPokemon={listPokemon}></TablePokemon>
                </Grid>
            </Grid>
        </div>

    );
}
export default Home;