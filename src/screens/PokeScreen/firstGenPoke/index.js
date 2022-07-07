import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import FirstPokeGen from "../../../components/firstPokeGen/pokeDetails";
import styles from "./styles";
import { Colors } from "../../../../assets/PokeColors";
import pokeImg from "../../../../assets/pokeIcons/pokeballs/Pokeball.png"
import Header from "../../header";

const PokeView = ({firstGenPoke}) => {

    
    const renderPokemon = ({ item }) => {

        const color = item.types[0].type.name === 'grass' ? Colors.grass
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
        :item.types[0].type.name === 'normal' ? Colors.normal 
        :Colors.black;

        let id = item.id;
        let dig = 3;
        let er = (n,d)=>{let e=10**d;return n<e?((n+e)+"").slice(1):n+""};
        let idValue = er(id,dig);

        return (
            <View style={[styles.pokeCont, {backgroundColor: color}] }>
                <Text style={styles.pokeName}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Text>
                <Text style={styles.pokeHas}>#</Text>
                <Text style={styles.pokeId}>{idValue}</Text>
                <Image style={styles.pokeImg}
                    resizeMode={'contain'}
                    source={pokeImg}
                />
                <Image style={styles.pokeImage}
                    resizeMode={'contain'}
                    source={{
                        uri: item.sprites.front_default,
                        // uri: item.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    }}
                />
                <View style={styles.pokeTypes}>{item.types.map(({type}, index) => {
                        return (
                                <Text style={styles.poketypeText} key={`${index}-${type}`}>{`${type.name}`}</Text>  
                        )                  
                    })
                }</View>
            </View>
        )
    }

    return (
        <View style={styles.pokeRender}>
            <FlatList 
            data={firstGenPoke} 
            numColumns={2}
            renderItem={renderPokemon}
            />
        </View>
    )
};
export default PokeView;