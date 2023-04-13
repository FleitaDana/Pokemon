import baseURL from "./baseUrl";

const getPokemones = () => baseURL.get("/pokemon?limit=1000")
const getPokemonesById = (id) => baseURL.get(`/pokemon/${id}`)
const getPokemonesByName = (name) => baseURL.get(`/pokemon/${name}`)
const getSpeciesPokemon = (id) => baseURL.get(`/pokemon-species/${id}`)
const getEvolutions = (evoId) => baseURL.get(`/evolution-chain/${evoId}`)

export{
    getPokemones,
    getPokemonesById,
    getPokemonesByName,
    getSpeciesPokemon,
    getEvolutions
}