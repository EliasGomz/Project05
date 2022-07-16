import React from "react";
import PokeView from "../../screens/PokeView";
import { View, Text } from "react-native";
import styles from "./styles";
import { parseName } from "../../utils/parseValid";


const PokeTypes = ({item}) =>{

    return(
        <View style={styles.pokeTypes}>{item.types.map(({type}, index) => {
                    return (
                            <Text style={styles.poketypeText} key={`${index}-${type}`}>{`${parseName(type.name)}`}</Text>  
                    )                  
                })
        }</View>
    )

};
export default PokeTypes;