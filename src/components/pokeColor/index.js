import React from "react";
import PokeView from "../../screens/PokeScreen/firstGenPoke";

const PokeColor = (colorPoke) => {

    const cPoke = ({ item }) => {
        
       item.types[0].type.name === 'grass' ? Colors.grass 
       :item.types[0].type.name === 'fire' ? Colors.fire 
       :item.types[0].type.name === 'water' ? Colors.water 
       :item.types[0].type.name === 'electric' ? Colors.electric 
       :item.types[0].type.name === 'ice' ? Colors.ice 
       :item.types[0].type.name === 'fighting' ? Colors.fighting 
       :item.types[0].type.name === 'poison' ? Colors.poison 
       :item.types[0].type.name === 'ground' ? Colors.ground 
       :item.types[0].type.name === 'flying' ? Colors.flying 
       :item.types[0].type.name === 'psychic' ? Colors.psychic 
       :item.types[0].type.name === 'bug' ? Colors.bug 
       :item.types[0].type.name === 'rock' ? Colors.rock 
       :item.types[0].type.name === 'ghost' ? Colors.ghost 
       :item.types[0].type.name === 'dragon' ? Colors.dragon 
       :item.types[0].type.name === 'dark' ? Colors.dark 
       :item.types[0].type.name === 'steel' ? Colors.steel 
       :item.types[0].type.name === 'fairy' ? Colors.fairy 
       :item.types[0].type.name === 'grnormalass' ? Colors.normal 
       :Colors.black
        
       return(
        <FlatList 
            data={colorPoke} 
        />
       )
    }

    return(
        

        <PokeView 
            color = {cPoke}
        />
    )

};
export default PokeColor;



