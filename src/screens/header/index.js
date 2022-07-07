import React from 'react'
import { Image, Text, View } from 'react-native'
import imgPoke from '../../../assets/pokeIcons/pokeballs/pokeH.png'
import styles from './styles'

const Header = () => {

    return(
        <View style={styles.header}>
            <Image 
            style={styles.imgHeader}
            source={imgPoke}
            />
            <Text style={styles.textHeader}>Pokedex</Text>
        </View>
        
    )
};
export default Header;