import React, { useState } from 'react'
import { unstable_HistoryRouter } from 'react-router-dom';

const Searcher = (props) => {

    const [keyword, setKeyword] = useState('');
    const [path, pushHistory] = unstable_HistoryRouter();
    
    const handleSubmit = evt =>{
        evt.preventDefault();

        pushHistory(`/https://pokeapi.co/api/v2/pokemon/${keyword}`);
        
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

return(
    <form onSubmit={handleSubmit}>
        <input placeholder="Busca tu pokemon favorito" onChange={handleChange} type="text" value={keyword}>
        </input>
    </form>
)
}

export default Searcher;