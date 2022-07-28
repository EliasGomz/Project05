import React from "react";
import { Image, Text, View, TouchableOpacity, Dimensions} from "react-native";
import styles from "./styles";
import { pokeTheme } from "../../../../Themes/pokeCardTheme";
import { parseNumber, parseName } from "../../../../utils/parseValid";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { parseHeight, parseWeight } from "../../../../utils/parseValid";
import Types from "./components/types";
import PikaLine from '../../../../Assets/icons/iconLoading/PikachuR.gif'




const PokeAboutDetails = ({item}) => {
    const type = item.types[0].type.name;
    const pokeHeight = parseHeight(item.height)

    return (
        <>
            <View style={styles.contP}>
                <Image 
                style={styles.pikaLine}
                resizeMode='contain'
                source={PikaLine}
                />
                <Text style={[styles.Carac, {color: pokeTheme[type]}]}>Caracteristicas</Text>
                <View style={[styles.contA, {borderColor: pokeTheme[type]}]}>
                    <Text style={styles.pokeH}>{`${pokeHeight}m`}</Text>
                    <FontAwesome5 name='ruler' style={styles.iconH}/>
                    <Text style={styles.pokeT}>Height</Text>
                </View>
                <View style={[styles.contW, {borderColor: pokeTheme[type]}]}>
                    <Text style={styles.pokeW}>{parseWeight(item.weight)}Kg</Text>
                    <FontAwesome5 name='balance-scale' style={styles.iconW}/>
                    <Text style={styles.pokeT}>Weight</Text>
                </View>
                <View style={[styles.CTypes, {borderColor: pokeTheme[type]}]}>
                    <Text style={[styles.Typos, {color: pokeTheme[type]}]}>Tipos</Text>
                    <Types
                        item = {item}
                    />
                </View>
                <View style={[styles.CTHab, {borderColor: pokeTheme[type]}]}>
                    <Text style={[styles.Typos, {color: pokeTheme[type]}]}>Habilidades</Text>
                    <Text style={[styles.Habil, {borderColor: pokeTheme[type]}]}>{item.abilities[0].ability.name}</Text>
                    <Text style={[styles.Habil, {borderColor: pokeTheme[type]}]}>{item.abilities[1]?.ability.name}</Text>
                </View>
            </View>
        </>
    )

}
export default PokeAboutDetails;