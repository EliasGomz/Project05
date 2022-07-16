import React, { useState } from "react";
import { FlatList, Image, Text, View} from "react-native";
import styles from "./styles";
import LoadImg from '../../../../Assets/icons/iconLoading/Pika2.gif'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { pokeTheme } from "../../../../Themes/pokeCardTheme";
import PikaLine from '../../../../Assets/icons/iconLoading/Team.gif'


const Evolutions = ({PokeBridge, isLoading, item}) => {
    const data = item;
    const type = data.types[0].type.name;
    const keyExtractor= (item, index) => `${index}-${item}`;

    const Render = ({item}) => {
        
        return(
            <View style={styles.contP}>
                <Text style={[styles.pokeE, {color: pokeTheme[type]}]}>Evolution Chain</Text>
                <View style={[styles.contEv, {borderColor: pokeTheme[type]}]}>
                    <Text style={[styles.poke1, {color: pokeTheme[type]}]}>{item.chain.species?.name}</Text>
                </View>
                <FontAwesome5 name='arrow-right' style={[styles.iconEv, {color: pokeTheme[type]}]}/>
                <Text style={styles.tEvol}>Lvl {item?.chain?.evolves_to[0]?.evolution_details[0]?.min_level}</Text>
                <View style={[styles.contEv, {borderColor: pokeTheme[type]}]}>
                    <Text style={[styles.poke1, {color: pokeTheme[type]}]}>{item?.chain?.evolves_to[0]?.species.name}</Text>
                </View>

                <View style={[styles.contEv2, {borderColor: pokeTheme[type]}]}>
                    <Text style={[styles.poke1, {color: pokeTheme[type]}]}>{item?.chain?.evolves_to[0]?.species.name}</Text>
                </View>
                <FontAwesome5 name='arrow-right' style={[styles.iconEv2, {color: pokeTheme[type]}]}/>
                <Text style={styles.tEvol2}>Lvl {item?.chain?.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_level}</Text>
                <View style={[styles.contEv2, {borderColor: pokeTheme[type]}]}>
                    <Text style={[styles.poke2, {color: pokeTheme[type]}]}>{item?.chain?.evolves_to[0]?.evolves_to[0]?.species.name}</Text>
                </View>
                <Image 
                    style={styles.pikaLine}
                    resizeMode='contain'
                    source={PikaLine}
                />
            </View>
        )
    }

    return (
        <>
           <FlatList 
                style={styles.pokeRender}
                data={PokeBridge}
                keyExtractor={keyExtractor}
                renderItem={Render}
                ListEmptyComponent={() => (
                    <>
                        {isLoading && (
                            <View style={styles.LoadC}>
                            <Image 
                                resizeMode='contain'
                                style={styles.Load} 
                                source={LoadImg}
                            />
                            </View>
                         )}
                    </>
                )}
             />
        </>
    )
}
export default Evolutions;