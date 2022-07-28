import React, { useEffect, useState } from "react";
import PokeView from "../../screens/PokeView";
import { Get } from "../../Api/ApiRequest";


const PokeExtractor = ({PokemonPaht}) => {
    const [PokemonDatails, setPokeDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const path = PokemonPaht

    useEffect(() => {
        newsResponse()
    }, []);
    
    const newsResponse = async() => {
        const response = await Get(path);
        const pokearr = []
        for (const Details of response.results) {
            const path = await Details.url
            const Det = await Get(path)
            pokearr.push(Det)
        }
        setPokeDetails(pokearr);
        setIsLoading(false); 
    }


    return(
            <PokeView 
                PokeDetails = {PokemonDatails}
                isLoading = {isLoading} 
            />
    )
};
export default PokeExtractor;