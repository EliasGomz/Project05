import React, { useEffect, useState } from "react";
import Evolutions from "../Evolutions";

const PokemonBridge = ({evolt, item}) => {
    const [PokeBridge, setPokeBridge] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fechtPokeSpecies = async () => {
            const pokeResponse = await fetch(evolt).then(v => v.json());
            const pokeEvoltURL = await pokeResponse.evolution_chain.url;
            const pokeEvolt = await fetch(pokeEvoltURL).then(v => v.json());
            const pokeArr = [];
            pokeArr.push(pokeEvolt)
            setPokeBridge(pokeArr);
            setIsLoading(false);    
        };
        fechtPokeSpecies();
    }, [])   

    return(
        <Evolutions 
            item={item}
            PokeBridge={PokeBridge}
            isLoading = {isLoading} 
        />
    )
}
export default PokemonBridge;