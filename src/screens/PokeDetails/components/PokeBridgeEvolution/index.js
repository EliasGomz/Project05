import React, { useEffect, useState } from "react";
import Evolutions from "../Evolutions";
import { Get } from "../../../../Api/ApiRequest";

const PokemonBridge = ({evolt, item}) => {
    const [PokeBridge, setPokeBridge] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fechtPokeSpecies = async () => {
            const pokeResponse = await Get(path = (evolt));
            const pokeEvoltURL = await pokeResponse.evolution_chain.url;
            const pokeEvolt = await await Get(path = (pokeEvoltURL));
            setPokeBridge(pokeEvolt);
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