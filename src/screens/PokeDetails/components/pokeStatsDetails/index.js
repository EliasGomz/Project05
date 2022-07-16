import React from "react";
import { Image, Text, View, TouchableOpacity, Dimensions} from "react-native";
import styles from "./styles";
import { pokeTheme } from "../../../../Themes/pokeCardTheme";
import { parseNumber, parseName } from "../../../../utils/parseValid";
import Pika from '../../../../Assets/icons/iconLoading/pikasLine.gif';




const PokeStatsDetails = ({item}) => {
    const type = item.types[0].type.name;

    const StarLine = ({number, color}) => {
        return(
            <View 
            style={[styles.startLine, {backgroundColor: color, width: number}]}
            />
        )
    }

    return (
        <>
            <View style={styles.contP}>
                <Text style={[styles.pokeT, {color: pokeTheme[type]}]}>Base Stats</Text>
                <View style={styles.contS}>
                    <View style={styles.contStats}>
                        <Text style={styles.contTexStats}>HP</Text>
                        <Text style={styles.contTexStats}>Defense</Text>
                        <Text style={styles.contTexStats}>Attack</Text>
                        <Text style={styles.contTexStats}>Special Attack</Text>
                        <Text style={styles.contTexStats}>Special Defense</Text>
                        <Text style={styles.contTexStats}>Speed</Text>
                    </View>
                    <View 
                       style={[styles.lineSeparator, {backgroundColor: pokeTheme[type]}]} 
                    />
                    <View style={styles.contStatsN}>
                        <Text style={styles.contStatsNum}>{item.stats[0].base_stat}</Text>
                        <Text style={styles.contStatsNum}>{item.stats[1].base_stat}</Text>
                        <Text style={styles.contStatsNum}>{item.stats[2].base_stat}</Text>
                        <Text style={styles.contStatsNum}>{item.stats[3].base_stat}</Text>
                        <Text style={styles.contStatsNum}>{item.stats[4].base_stat}</Text>
                        <Text style={styles.contStatsNum}>{item.stats[5].base_stat}</Text>
                    </View>
                    <View style={styles.contStatsL}>
                        <StarLine 
                            number={item.stats[0].base_stat}
                            color={pokeTheme[type]}
                        />
                        <StarLine 
                            number={item.stats[1].base_stat}
                            color={pokeTheme[type]}
                        />
                        <StarLine 
                            number={item.stats[2].base_stat}
                            color={pokeTheme[type]}
                        />
                        <StarLine 
                            number={item.stats[3].base_stat}
                            color={pokeTheme[type]}
                        />
                        <StarLine 
                            number={item.stats[4].base_stat}
                            color={pokeTheme[type]}
                        />
                        <StarLine 
                            number={item.stats[5].base_stat}
                            color={pokeTheme[type]}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}
export default PokeStatsDetails;