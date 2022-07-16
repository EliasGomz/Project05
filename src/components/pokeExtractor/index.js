import React, { useEffect, useState } from "react";
import PokeView from "../../screens/PokeView";

const PokeExtractor = ({PokemonPaht}) => {
    const [PokemonDatails, setPokeDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(PokemonPaht);
    useEffect(() => {
        const fetchFirstGenPokemons = async () => {
            const PokemonIdsResponse = await fetch(PokemonPaht).then(v => v.json());
            const pokeArr = [];
            for (const PokemonDatails of PokemonIdsResponse.results) {
                const pDetails = await fetch(PokemonDatails.url).then(v => v.json());
                pokeArr.push(pDetails);
            }   
            setPokeDetails(pokeArr);
            setIsLoading(false);    
      };
      fetchFirstGenPokemons();
    }, []);

    return(
            <PokeView 
                PokeDetails = {PokemonDatails}
                isLoading = {isLoading} 
            />
    )
};
export default PokeExtractor;