import { StyleSheet } from 'react-native';
import { pokeTheme } from '../../Themes/pokeCardTheme';

const styles = StyleSheet.create({
    pokeRender:{
        backgroundColor: pokeTheme.background,
    },
    pokeCont:{
        height: 120,
        width: 170,
        marginTop: 20,
        marginLeft: 18,
        borderRadius: 15,
    },
    pokeName:{
        position: 'absolute',
        width: 100,
        height: 20,
        left: 10,
        top: 5,
        color: pokeTheme.white,
        fontFamily: 'bold',
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 20,
    },
    pokeId:{
        position: 'absolute',
        width: 30,
        height: 15,
        left: 130,
        top: 6,
        fontSize: 15,
        lineHeight: 18,
        color: pokeTheme.lightGray
    },
    pokeHas:{
        position: 'absolute',
        width: 30,
        height: 15,
        left: 120,
        top: 6,
        fontSize: 15,
        lineHeight: 18,
        color: pokeTheme.lightGray
    },
    pokeImg:{
        position: 'absolute',
        zIndex: 1,
        left: 80,
        top: 40
    },
    pokeImage:{
        width: 110,
        height: 110,
        position: 'absolute',
        zIndex: 2,
        left: 68,
        top: 15,
    },
    pokeTypes:{
        left: 10,
        top: 60,
    },    
    poketypeText:{
         color: pokeTheme.white,
         height: 22,
         width: 55,
         backgroundColor: 'rgba(255,255,255,.4)',
         borderRadius: 40,
         textAlign: 'center',
         marginTop: 5,
         fontWeight: 'bold',
    },
});
export default styles;