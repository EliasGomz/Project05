import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, Dimensions} from "react-native";
import styles from "./style";
import PokeDetails from "../..";
import { pokeTheme } from "../../../../Themes/pokeCardTheme";
import { parseNumber, parseName } from "../../../../utils/parseValid";




const HeaderDetails = ({item}) => {
    const type = item.types[0].type.name;

    return (
        <>
            <View style={[styles.contP, {backgroundColor: pokeTheme[type]}]}>
                <Text style={styles.pokeName}>{parseName(item.name)}</Text>
                <Text style={styles.pokeId}>{`#${parseNumber(item)}`}</Text>
                <Image 
                    style={styles.pokeImage}
                    resizeMode={'contain'}
                    source={{
                        uri: item.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    }}
                />
            </View>
        </>
    )

}
export default HeaderDetails;