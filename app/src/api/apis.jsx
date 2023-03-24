import baseURL from "./baseUrl";

const getPokemones = () => baseURL.get("/pokemon/")
const getPokemonesById = (id) => baseURL.get(`/pokemon/${id}`)
const getSpeciesPokemon = (id) => baseURL.get(`/pokemon-species/${id}`)

export{
    getPokemones,
    getPokemonesById,
    getSpeciesPokemon
}