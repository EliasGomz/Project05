import { Colors } from "../../../assets/PokeColors";

  export function setNext(payload){
    return {type: 'NEXT/SETNEXT', payload}
  }
  
  export function addPokemons(payload) {
    return {type: 'POKEMONS/ADDPOKEMONS', payload}
  }
  
  export function addMoves(payload) {
    return {type: 'POKEMONDETAIL/ADDMOVES', payload}
  }
  
  export function addTypes(payload) {
    return {type: 'POKEMONDETAIL/ADDTYPES', payload}
  }
  
  export function addPokebag(payload) {
    return {type: 'POKEBAG/ADDPOKEBAG', payload}
  }
  
  export function deletePokebag(payload){
    return {type: 'POKEBAG/DELETEPOKEBAG', payload}
  }
  
  export function setLoading(payload) {
    return {type: 'LOADING/SETLOADING', payload}
  }
  
  export function setPokemonDetail(payload) {
    return {type: 'POKEMONDETAIL/SETPOKEMONDETAIL', payload}
  }
  
  export function fetchPokemons(next){
    return async (dispatch) => {
      try {
        dispatch(setLoading(true))
        let url = ''
        if (next){
          url = next
        } else {
          url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
        }
        const res = await fetch(url)
        let result = await res.json()
       
  
        const pokemonsArray = [];
        for await (const pokemon of result.results) {
          const pokemonDetailsResponse = await fetch(pokemon.url);
          const pokemonDetails = await pokemonDetailsResponse.json()
  
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name[0].toUpperCase() + pokemonDetails.name.substring(1),
            type: pokemonDetails.types[0].type.name,
            types: pokemonDetails.types,
            moves: pokemonDetails.moves,
            order: pokemonDetails.order,
            imgUrl: pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.front_default,
            species: pokemonDetails.species.name,
            height: pokemonDetails.height,
            weight: pokemonDetails.weight,
            abilities: pokemonDetails.abilities,
            stats: pokemonDetails.stats,
          });
        }
  
        await dispatch(addPokemons(pokemonsArray))
        await dispatch(setNext(result.next))
        dispatch(setLoading(false))
      } catch (error) {
        console.log(error,'\n---ERROR FETCH POKEMON---')
        dispatch(setLoading(false))
      }
    }
  }
  
  export function fetchPokemonDetail(url){
    return async (dispatch) => {
      try {
        dispatch(setLoading(true))
        const res = await fetch(url)
        let result = await res.json()
        await dispatch(setPokemonDetail(+url.split("pokemon/")[1].split('/')[0]))
        await dispatch(addMoves(result.moves))
        await dispatch(addTypes(result.types))
        dispatch(setLoading(false))
      } catch (error) {
        console.log(error,'\n---ERROR FETCH POKEMON---')
        dispatch(setLoading(false))
      }
    }
  }