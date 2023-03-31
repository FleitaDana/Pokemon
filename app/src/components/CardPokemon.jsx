import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const CardPokemon = (props) => {

    const [stats, setStats] = useState([]);
    const [ability, setAbility] = useState([]);
    // const [evolutions, setEvolutions] = useState([]);
    const [totalEvolutionsMedia, setTotalEvolutionsMedia] = useState([]);
    const [totalEvolutionsFinal, setTotalEvolutionsFinal] = useState([]);

    useEffect(() => {
        setStats(props.pokemonStats)
    }, [props.pokemonStats])

    useEffect(() => {
        setAbility(props.pokemonAbilities)
    }, [props.pokemonAbilities])

/*     console.log("EVOLUTIONESassssss")
    console.log(props.totalEvolutions); */

   /*  useEffect(() => {
        setEvolutions(props.totalEvolutions)
    }, [props.totalEvolutions]) */

    useEffect(() => {
        setTotalEvolutionsMedia(props.totalEvolutionsMedia)
    }, [props.totalEvolutionsMedia])

    useEffect(() => {
        setTotalEvolutionsFinal(props.totalEvolutionsFinal)
    }, [props.totalEvolutionsFinal])
/* 
    console.log("EVOLUTIONES CARD")
    console.log(evolutions); */

    return (

        // <Container maxWidth="lg" sx={{ height: '100vh' }}>

        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            xs={12}
        >
            <Grid item
                justifyContent="center"
                alignItems="center"
                xs={12} md={12} lg={12}
                sx={{ margin: 2 }}>
                <Card sx={{ transition: "0.2s", "&:hover": { transform: "scale(1.05)" }, display: 'flex', alignContent: 'center', justifyContent: 'center', boxShadow: 10, border: 2 }}>
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
                                <br />
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>
                                Altura: {props.pokemonHeight}
                                <br />
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>
                                Evoluciona de:   {props.pokemonEvolutionOne}
                            </Typography>

                            <Typography variant="h6" color="text.primary" align='center'>
                                Evolucion media:
                                <br />
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>
                                {totalEvolutionsMedia?.map(media=> (
                                    <Typography variant="body2" color="text.primary" align='center'>{media}</Typography>)
                                )}
                            </Typography>

                            <Typography variant="h6" color="text.primary" align='center'>
                                Evolucion Final:
                                <br />
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>
                                {totalEvolutionsFinal?.map(final=> (
                                    <Typography variant="body2" color="text.primary" align='center'>{final}</Typography>)
                                )}
                            </Typography>

                            {/* <Typography variant="body2" color="text.primary" align='center'>
                                Evoluciona de:  
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>
                                {evolutions?.map((evolution) => (
                                    <Typography variant="body2" color="text.primary" align='center'>{evolution}</Typography>)
                                )}
                            </Typography>  */}

                            <Typography variant="h6" color="text.primary" align='center'>
                                Special-stats:
                                <br />
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>
                                {stats?.map(st => (
                                    <Typography variant="body2" color="text.primary" align='center'>{st.stat.name}:{st.base_stat}</Typography>)
                                )}
                            </Typography>

                            <Typography variant="h6" color="text.primary" align='center'>
                                Abilities:
                                <br />
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>
                                {ability?.map(ability =>
                                    <Typography variant="body2" color="text.primary" align='center'>{ability.ability.name}</Typography>)}
                                <br></br>




                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Grid>
        </Grid>
        // </Container >
    )
}

export default CardPokemon;