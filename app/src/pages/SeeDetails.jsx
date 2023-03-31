import { CircularProgress, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardPokemon from '../components/CardPokemon';
import { getPokemonesById, getSpeciesPokemon, getEvolutions } from '../api/apis';


const SeeDetails = () => {

    const paramsId = useParams();

    const [pokemon, setPokemon] = useState('');
    //    const [pokemonName, setPokemonName] = useState();
    const [pokemonImage, setPokemonImage] = useState('');
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [pokemonStats, setPokemonStats] = useState([])
    const [pokemonSpecies, setPokemonSpecies] = useState([])
    const [pokemonEvolutionsId, setPokemonEvolutionsId] = useState();
    const [loading, setLoading] = useState(false);
    const [evolutionOne, setEvolutionOne] = useState('');
    const [evolutionTwo, setEvolutionTwo] = useState([]);
    const [evolutionTree, setEvolutionTree] = useState([]);
    const [totalEvolutionsMedia, setTotalEvolutionsMedia] = useState([]);
    const [totalEvolutionsFinal, setTotalEvolutionsFinal] = useState([]);

    useEffect(() => {
        data();
    }, [paramsId])

    useEffect(() => {
        console.log("entro")
        data();
        //check(evolutionOne, evolutionTwo);
    }, [])

    const data = () => {
        setLoading(true)
        getPokemonesById(paramsId.id)

            .then((res) => {
                setPokemon(res.data);
                setPokemonImage(res.data.sprites.other.home.front_default)
                setPokemonAbilities(res.data.abilities);
                setPokemonStats(res.data.stats);
                setPokemonSpecies(res.data.species);
                getSpeciesPokemon(paramsId.id)

                    .then((res) => {
                        setPokemonEvolutionsId(res.data.evolution_chain.url)
                        const evoId = (res.data.evolution_chain.url).split('/')[6];

                        getEvolutions(parseInt(evoId))

                            .then((res) => {
                                setEvolutionOne(res.data.chain.species.name);
                                setEvolutionTwo(res.data.chain.evolves_to?.map((item) => item.species.name));
                                setEvolutionTree(res.data.chain.evolves_to?.map((item) => item.evolves_to?.map((item) => item.species.name)));
                                check(res.data.chain.species.name, res.data.chain.evolves_to?.map((item) => item.species.name), res.data.chain.evolves_to?.map((item) => item.evolves_to?.map((item) => item.species.name)));

                            })
                    })
                setLoading(false);

                console.log("RESDATA")
                console.log(pokemon);
            })
    }

    const check = (evolutionOne, evolutionTwo, evolutionTree) => {
        console.log(evolutionOne) 
        console.log(evolutionTwo) 
        console.log(evolutionTree) 
        // setTotalEvolutions(evolutionOne);
        // console.log(totalEvolutions);

        if (Array.isArray(evolutionTwo) && evolutionTwo?.length > 0) {
            // let evolutions = [];
            // evolutions = evolutionTwo?.map((item) => (item))
            // evolutionTwo?.map((item) => evolutions.push(item))
            //  setTotalEvolutions(prevList => prevList.concat(evolutions));
            //  setTotalEvolutions(prevList => ([prevList, evolutionTwo.map((item) => (item))]));
            setTotalEvolutionsMedia(evolutionTwo.map((item) =>item));

            console.log(totalEvolutionsMedia);
        }
        else {
            setTotalEvolutionsMedia(prevList => prevList.concat(evolutionTwo));
        }


        console.log("TERCERA EVO");
        console.log(evolutionTree);
        
        if (Array.isArray(evolutionTree) && evolutionTree?.length > 0) {

            setTotalEvolutionsFinal(evolutionTree.map((item) =>item));

            console.log(totalEvolutionsFinal);
        }
        else {
            setTotalEvolutionsFinal(prevList => prevList.concat(evolutionTree));
        }
        console.log(totalEvolutionsFinal);
   
        // setListaEvoluciones(prevList => prevList.concat(midList))

        /* if (evolutionTwo.isArray() && evolutionTree.length > 0) {
            evolutionTree.map((item) => setTotalEvolutions(item))
        } */

    }

    if (loading) return <h1>Loading datos <CircularProgress /></h1>

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
                    pokemonEvolutionOne={evolutionOne}
                    totalEvolutionsMedia={totalEvolutionsMedia}
                    totalEvolutionsFinal={totalEvolutionsFinal}

                />
            </Container>
        </div>
    )
}
export default SeeDetails;

