import { Card, CardActionArea, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const CardPokemon = (props) => {
    const [stats, setStats] = useState([]);
    const [ability, setAbility] = useState([]);


    useEffect(() => {
        setStats(props.pokemonStats)
    }, [props.pokemonStats])

    useEffect(() => {
        setAbility(props.pokemonAbilities)
    }, [props.pokemonAbilities])

    console.log(stats)
    return (

        // <Container maxWidth="lg" sx={{ height: '100vh' }}>

        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            xs={12}
        >
            <Card sx={{transition: "0.2s", "&:hover": { transform: "scale(1.05)" }, display: 'flex', alignContent: 'center', justifyContent: 'center', boxShadow: 10 }}>
                <CardActionArea>

                    <CardMedia sx={{ height: 330 }}
                        component="img"
                        image={props.pokemonImage}
                        alt="Foto Pokemon"
                    />
                    <CardContent sx={{ fontStyle: 'oblique' }}>

                        <Typography gutterBottom variant="h5" component="div" align='center'>
                            {props.pokemonName}
                        </Typography>

                        <Typography variant="body2" color="text.primary" align='center'>
                            Peso: {props.pokemonWeight}
                        </Typography>

                        <Typography variant="body2" color="text.primary" align='center'>
                            Altura: {props.pokemonHeight}
                        </Typography>

                        <Typography variant="body2" color="text.primary" align='center'>
                            Special-stats:
                        </Typography>

                        <Typography variant="body2" color="text.primary" align='center'>
                            {stats?.map((st) => (
                                <Typography variant="body2" color="text.primary" align='center'>{st.stat.name}:{st.base_stat}</Typography>)
                            )}
                        </Typography>

                        <Typography variant="body2" color="text.primary" align='center'>

                            Abilities: {ability?.map((ability) =>
                                <Typography variant="body2" color="text.primary" align='center'>{ability.ability.name}</Typography>)}
                            <br></br>

                               
                         {/*    <Typography variant="body2" color="text.primary" align='center'>
                        Evoluciona de:  {props.pokemonEvolutions}
                        </Typography> */}

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Grid>
        // </Container >
    )
}

export default CardPokemon;