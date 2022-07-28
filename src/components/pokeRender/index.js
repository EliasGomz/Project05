import React, { memo } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { pokeTheme } from "../../Themes/pokeCardTheme";
import pokeImg from "../../Assets/icons/iconsCards/PokeCard.png";
import PokeView from "../../screens/PokeView";
import PokeTypes from '../pokeType'
import { parseName, parseNumber } from "../../utils/parseValid";
import { useNavigation } from '@react-navigation/native';

const RenderPokemon = ({item}) => {
    const type = item.types[0].type.name;
    const navigation = useNavigation();

    const PokeDetail = () => {
        navigation.navigate("PokeDetails", {
            item: item,
        })
    }



    return (
        // agrea el activeOpacity a todoos los TooucheableOpacity
        <TouchableOpacity 
            style={[styles.pokeCont, {backgroundColor: pokeTheme[type]}]}
            onPress={PokeDetail}
        >
            <Text style={styles.pokeName}>
                {parseName(item.name)}
            </Text>
            <Text style={styles.pokeId}>{`#${parseNumber(item)}`}</Text>
            <Image style={styles.pokeImg}
                resizeMode={'contain'}
                source={pokeImg}
            />
            <Image style={styles.pokeImage}
                resizeMode={'contain'}
                source={{
                    uri: item.sprites.front_default,
                }}
            />
            <PokeTypes 
                item={item}
            />
        </TouchableOpacity>
    )
};
export default memo(RenderPokemon);