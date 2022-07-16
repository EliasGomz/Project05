import React from "react";
import PokeExtractor from "../../components/pokeExtractor";
import Header from '../../components/header'
import { useRoute } from "@react-navigation/native";


const PokView = () => {

    const route = useRoute();

    return (
        <>
            <Header />
            <PokeExtractor 
                PokemonPaht={route.params.PokemonPaht}
            />
        </>
    )

};
export default PokView;