import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import TablePokemon from '../components/TablePokemon';
import { useLocation } from 'react-router-dom';
import { getPokemones } from '../api/apis';

const Home = () => {

    const [listPokemon, setListPokemon] = useState([])
    const [count, setCount] = useState()


    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    useEffect(() => {

        getPokemones(page)
            .then((res) => {
                setListPokemon(res.data.results)
                setCount(parseInt(res.data.count/20) + (res.data.count%20))
            })
    }, [page])

    return (
        <div className='background-table'>
            <Grid
                container
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p="20"
                sx={{height: '170vh'}}
            >
                <Grid item
                    justifyContent="center"
                    alignItems="center"
                    xs={12} md={12} lg={12}
                    sx={{ margin: 2 }}>
                    <TablePokemon
                    listPokemon={listPokemon}
                    page={page}
                    count={count}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
export default Home;