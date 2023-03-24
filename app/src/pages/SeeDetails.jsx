import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardPokemon from '../components/CardPokemon';
import { url } from '../api/baseUrl';
import axios from 'axios';
import { getPokemonesById, getSpeciesPokemon } from '../api/apis';


const SeeDetails = () => {

    const paramsId = useParams();

    const [pokemon, setPokemon] = useState('');
    //    const [pokemonName, setPokemonName] = useState();
    const [pokemonImage, setPokemonImage] = useState('');
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [pokemonStats, setPokemonStats] = useState([])
    const [pokemonSpecies, setPokemonSpecies] = useState([])
    const [pokemonEvolutions, setPokemonEvolutions] = useState();

    useEffect(() => {
        getPokemonesById(paramsId.id)
        .then((res) => {
                setPokemon(res.data);
                setPokemonImage(res.data.sprites.other.home.front_default)

                setPokemonAbilities(res.data.abilities);
                setPokemonStats(res.data.stats);
                setPokemonSpecies(res.data.species);
                
                getSpeciesPokemon(paramsId.id)
                .then((res) =>{
                    setPokemonEvolutions(res.data.evolves_from_species);
                })
            })
    }, [paramsId])

    return (
        <div className='fondo-card'>
                    <Container maxWidth="sm" sx={{ height: '100vh' }}>
                        <CardPokemon
                                pokemon={pokemon}
                                pokemonName={pokemon.name}
                                pokemonImage={pokemonImage}
                                pokemonAbilities={pokemonAbilities}
                                pokemonStats={pokemonStats}
                                pokemonSpecies={pokemonSpecies}
                                pokemonHeight={pokemon.height}
                                pokemonWeight={pokemon.weight}
                                pokemonEvolutions={pokemonEvolutions}

                            />
                    </Container>    
        </div>
    )
}
export default SeeDetails;

