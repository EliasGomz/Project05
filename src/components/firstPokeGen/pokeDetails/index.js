import React from "react";
import { useState, useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";
import PokeView from "../../../screens/PokeScreen/firstGenPoke";



const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=151&offset=0";
const firstGenPokemonPaht = `${pokePath}${pokeQuery}`;

const FirstPokeGen = () => {
    const [firstGenPokemonDatails, setFirstGenPokeDetails] = useState([]);

    useEffect(() => {
        const fetchFirstGenPokemons = async () => {
            const firstGenPokemonIdsResponse = await fetch(firstGenPokemonPaht);
            const firstGenPokemonIdsBody = await firstGenPokemonIdsResponse.json();

            const firstGenPokemonDatails = await Promise.all(
                firstGenPokemonIdsBody.results.map(async (p) =>{
                    const pDetails = await fetch(p.url);

                    return await pDetails.json();
                })
            );
            setFirstGenPokeDetails(firstGenPokemonDatails);
      };
      
      fetchFirstGenPokemons();
    }, []);

    return(
        <PokeView 
            firstGenPoke = {firstGenPokemonDatails}
        />
    )

};
export default FirstPokeGen;