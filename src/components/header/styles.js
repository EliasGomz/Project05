import { StyleSheet } from 'react-native';
import { pokeTheme } from '../../Themes/pokeCardTheme';

const styles = StyleSheet.create({
    header:{
        backgroundColor: pokeTheme.background,
        height: 200,
        width: 400,
    },
    imgHeader:{
        height: 270,
        width: 260,
        left: 200,
        bottom: 50,
    },
    textHeader:{
        color: pokeTheme.mediumGray,
        position: 'absolute',
        top: 160,
        left: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },
    iconL:{
        position: 'absolute',
        fontSize: 40,
        marginLeft: 5,
        marginTop: 15,
        color: '#E04845',
    },
});
export default styles;