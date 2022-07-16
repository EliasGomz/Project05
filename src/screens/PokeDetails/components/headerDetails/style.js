import { StyleSheet } from 'react-native';
import { pokeTheme } from '../../../../Themes/pokeCardTheme';

const styles = StyleSheet.create({
    //constenedor primario
    contP:{
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 0,
    },
    pokeImage:{
        width: 180,
        height: 180,
        left: 120,
        top: 20,
    },
    pokeName:{
        color: pokeTheme.white,
        fontSize: 30,
        left: 10,
        top: 10,
        fontWeight: 'bold',
    },
    pokeId:{
        color: pokeTheme.white,
        fontSize: 30,
        left: 320,
        bottom: 20,
        fontWeight: 'bold',
    },
});
export default styles;