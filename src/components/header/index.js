import React from 'react'
import { Image, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
import pokeHeader from "../../Assets/images/headerImg/pokeHeader.png"
import styles from './styles'

const Header = () => {
    const navigation = useNavigation();
    return(
        
        <View style={styles.header}>
            <StatusBar animated={true} backgroundColor="transparent" barStyle="dark-content" />
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
            >
                <Entypo name='chevron-left' style={styles.iconL}/>
            </TouchableOpacity>
            <Image 
            style={styles.imgHeader}
            source={pokeHeader}
            />
            <Text style={styles.textHeader}>Pokedex</Text>
        </View>
        
    )
};
export default Header;