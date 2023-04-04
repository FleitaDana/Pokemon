import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, CardHeader, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const CardPokemon = (props) => {

    const [stats, setStats] = useState([]);
    const [ability, setAbility] = useState([]);
    const [totalEvolutionsMedia, setTotalEvolutionsMedia] = useState([]);
    const [totalEvolutionsFinal, setTotalEvolutionsFinal] = useState([]);

    useEffect(() => {
        setStats(props.pokemonStats)
    }, [props.pokemonStats])

    useEffect(() => {
        setAbility(props.pokemonAbilities)
    }, [props.pokemonAbilities])

    useEffect(() => {
        setTotalEvolutionsMedia(props.totalEvolutionsMedia)
    }, [props.totalEvolutionsMedia])

    useEffect(() => {
        setTotalEvolutionsFinal(props.totalEvolutionsFinal)
    }, [props.totalEvolutionsFinal])

    return (


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
                sx={{ margin: 3 }}>
                <Card sx={{ transition: "0.2s", "&:hover": { transform: "scale(1.05)" }, display: 'flex', alignContent: 'center', justifyContent: 'center', boxShadow: 10, border: 2 }}>
                    <CardActionArea>

                        <CardHeader sx={{ color: 'grey' }}
                            title={props.pokemon.id}
                        />
                        <CardMedia sx={{ height: 300 }}
                            component="img"
                            image={props.pokemonImage}
                            alt="Foto Pokemon"
                        />
                        <CardContent m='4' sx={{ fontStyle: 'oblique' }}>

                            <Typography gutterBottom variant="h4" component="div" align='center'>
                                {props.pokemonName}
                            </Typography>

                            <Typography variant="h6" color="text.primary" align='center'>
                                Peso: <Typography variant="body2">{props.pokemonWeight} kg</Typography>
                            </Typography>


                            <Typography variant="h6" color="text.primary" align='center'>
                                Altura: <Typography variant="body2">{props.pokemonHeight} cm</Typography>
                            </Typography>

                            <Typography variant="h6" color="text.primary" align='center'>
                                Evoluciona de:
                                <Link underline='none' href={`/SeeDetails/${props.pokemonEvolutionOne}`}>
                                    <Typography variant="body2">{props.pokemonEvolutionOne}  <ArrowOutwardIcon sx={{ fontSize: 'small' }} /></Typography>
                                </Link>
                            </Typography>

                            <Typography variant="h6" color="text.primary" align='center'>
                                Evolucion media:
                                <br />
                            </Typography>


                            <Typography variant="body2" color="text.primary" align='center'>
                                {totalEvolutionsMedia?.map(media => (
                                    <Link underline='none' href={`/SeeDetails/${media}`}>
                                        <Typography variant="body2" color="text.primary" align='center'>{media}<ArrowOutwardIcon sx={{ fontSize: 'small' }} /></Typography>
                                    </Link>
                                ))}
                            </Typography>


                            <Typography variant="h6" color="text.primary" align='center'>
                                Evolucion Final:
                                <br />
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>

                                {totalEvolutionsFinal?.map(final => (
                                    <Typography variant="body2" color="text.primary" align='center'>{final}</Typography>)
                                )}
                            </Typography>

                            <Typography variant="h6" color="text.primary" align='center'>
                                Special-stats:
                                <br />
                            </Typography>

                            <Typography variant="body2" color="text.primary" align='center'>
                                {stats?.map(st => (
                                    <Typography variant="body2" color="text.primary" align='center'>{st.stat.name}: {st.base_stat}</Typography>)
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

                <Link underline='none' href={`/SeeDetails/${props.pokemon.id + 1}`}><button><KeyboardArrowRightIcon sx={{ fontSize: 'large' }} /></button>
                </Link>
                <Link underline='none' href={`/SeeDetails/${props.pokemon.id - 1}`}><button><KeyboardArrowLeftIcon sx={{ fontSize: 'large' }} /></button>
                </Link>
            </Grid>
        </Grid >
    )
}
export default CardPokemon;