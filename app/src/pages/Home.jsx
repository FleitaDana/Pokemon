import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import TablePokemon from '../components/TablePokemon';
import { url } from '../api/baseUrl';
import { getPokemones } from '../api/apis';

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
                xs={8}
            >
                <TablePokemon listPokemon={listPokemon}></TablePokemon>
            </Grid>
        </div>

    );
}
export default Home;