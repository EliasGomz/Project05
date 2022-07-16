import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { pokePath, firstGen, secGen } from "../../Constans/pokePaths";
import { useNavigation } from '@react-navigation/native';
import PokeExtractor from "../pokeExtractor";
import styles from "./styles";
import img1 from '../../Assets/icons/iconCardFirstGen/001.png'
import img2 from '../../Assets/icons/iconCardFirstGen/004.png'
import img3 from '../../Assets/icons/iconCardFirstGen/007.png'
import img4 from '../../Assets/icons/iconCardSecnGen/152.png'
import img5 from '../../Assets/icons/iconCardSecnGen/155.png'
import img6 from '../../Assets/icons/iconCardSecnGen/158.png'
import pokeCard from '../../Assets/icons/iconsCards/IconCardSelect.png'
import pokePattern from '../../Assets/icons/iconsCards/Pattern.png'

const FirstGen = `${pokePath}${firstGen}`;
const SecGen = `${pokePath}${secGen}`;

const SelectGenPoke = () => {
    const navigation = useNavigation();

    const KantoGen = () => {
        navigation.navigate("pokeView", {
            PokemonPaht: FirstGen,
        })
    }

    const JhotoGen = () => {
        navigation.navigate("pokeView", {
            PokemonPaht: SecGen,
        })
    }


    return(
        <View style={styles.cont}>
            <TouchableOpacity 
                style={styles.btnG}
                onPress={KantoGen}
            >
                <Image 
                    style={styles.pokeCard}
                    resizeMode={'contain'}
                    source={pokeCard}
                />
                <Image 
                    style={styles.pokePattern}
                    resizeMode={'contain'}
                    source={pokePattern}
                />
                <Image 
                    style={styles.pokeImg1}
                    resizeMode={'contain'}
                    source={img1}
                />
                <Image 
                    style={styles.pokeImg2}
                    resizeMode={'contain'}
                    source={img2}
                />
                <Image 
                    style={styles.pokeImg3}
                    resizeMode={'contain'}
                    source={img3}
                />
                <Text style={styles.pokeGenText}>Kanto</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.btnG}
                onPress={JhotoGen}
            >
                <Image 
                    style={styles.pokeCard}
                    resizeMode={'contain'}
                    source={pokeCard}
                />
                <Image 
                    style={styles.pokePattern}
                    resizeMode={'contain'}
                    source={pokePattern}
                />
                <Image 
                    style={styles.pokeImg4}
                    resizeMode={'contain'}
                    source={img4}
                />
                <Image 
                    style={styles.pokeImg5}
                    resizeMode={'contain'}
                    source={img5}
                />
                <Image 
                    style={styles.pokeImg6}
                    resizeMode={'contain'}
                    source={img6}
                />
                <Text style={styles.pokeGenText}>Jhoto</Text>
            </TouchableOpacity>
        </View>
    );
};
export default SelectGenPoke;