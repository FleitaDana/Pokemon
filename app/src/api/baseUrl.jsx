// export const url = "https://pokeapi.co/api/v2/pokemon/";

import axios from "axios";


const baseURL = axios.create({

    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
        "Content-Type": "aplication/json",
    }

});
export default baseURL;