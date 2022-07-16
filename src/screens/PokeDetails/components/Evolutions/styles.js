import { position } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet } from 'react-native';
import { pokeTheme } from '../../../../Themes/pokeCardTheme';

const styles = StyleSheet.create({
     contP:{
        backgroundColor: pokeTheme.white,
        height: 390,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    pokeE:{
        alignSelf: 'center',
        top: 30,
        color: pokeTheme.black,
        fontSize: 30,
        fontWeight: 'bold',
    },
    contEv:{
        width: 100,
        height: 50,
        borderWidth: 3,
        borderColor: pokeTheme.black,
        borderRadius: 5,
        top: 40,
        alignSelf: 'center',
        marginTop: 30,
        right: 100,
    },
    contEv2:{
        width: 100,
        height: 50,
        borderWidth: 3,
        borderColor: pokeTheme.black,
        borderRadius: 5,
        bottom: 147,
        alignSelf: 'center',
        marginTop: 30,
        left: 100
    },
    poke1:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        top: 10
    },
    iconEv:{
        left: 185,
        fontSize: 25,
        bottom: 5,
    },
    iconEv2:{
        left: 185,
        fontSize: 25,
        bottom: 85
    },
    poke2:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        top: 10
    },
    Load:{
        width: 170,
        height: 170  
    },
    LoadC:{
        paddingTop: 80,
        left: 110
    },
    pikaLine:{
        height: 200,
        width: 300,
        left: 50,
        position: 'absolute',
        top: 250,
    },
    tEvol:{
        position: 'absolute',
        fontSize: 15,
        fontWeight: 'bold',
        top: 130,
        left: 178
    },
    tEvol2:{
        position: 'absolute',
        fontSize: 15,
        fontWeight: 'bold',
        top: 240,
        left: 178
    }
});
export default styles;