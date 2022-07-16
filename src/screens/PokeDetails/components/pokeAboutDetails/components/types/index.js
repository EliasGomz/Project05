import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { parseName } from "../../../../../../utils/parseValid";
import { pokeTheme } from "../../../../../../Themes/pokeCardTheme"; 


const Types = ({item}) =>{

    return(
        <View style={styles.pokeTypes}>{item.types.map(({type}, index) => {
            const Types = index === 0 ? item.types[0].type.name : item.types[1].type.name
                    return (
                            <Text style={[styles.poketypeText,{backgroundColor: pokeTheme[Types]}]} key={`${index}-${type}`}>{`${parseName(type.name)}`}</Text>  
                    )                  
                })
        }</View>
    )

};
export default Types;