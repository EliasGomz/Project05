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
    pokeT:{
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        top: 55
    },
    Carac:{
        fontSize: 30,
        alignSelf: 'flex-start',
        top: 30,
        left: 75,
        fontWeight: 'bold',
    },
    contA:{
        height: 80,
        width: 120,
        borderColor: 'red',
        borderWidth: 2,
        top: 70,
        left: 40,
        borderRadius: 15
    },
    pokeH:{
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute',
        left: 50,
        top: 20 
    },
    iconH:{
        fontSize: 20,
        position: 'absolute',
        left: 15,
        top: 20
    },
    contW:{
        height: 80,
        width: 120,
        borderColor: 'red',
        borderWidth: 2,
        left: 170,
        bottom: 10,
        borderRadius: 15
    },
    pokeW:{
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute',
        left: 45,
        top: 20 
    },
    iconW:{
        fontSize: 20,
        position: 'absolute',
        left: 15,
        top: 20
    },
    CTypes:{
        height: 110,
        width: 90,
        borderWidth: 2,
        top: 10,
        left: 40,
        borderRadius: 15
    },
    Typos:{
        alignSelf: 'center',
        top: 5,
        fontWeight: 'bold',
        fontSize: 15,
    },
    CTHab:{
        height: 110,
        width: 155,
        borderWidth: 2,
        left: 140,
        bottom: 100,
        borderRadius: 15
    }, 
    Habil:{
        alignSelf: 'center',
        top: 10,
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 20,
        borderBottomWidth: 2,
    },
    pikaLine:{
        position: 'absolute',
        left: 206,
        top: 25,
        width: 500,
        
    },
});
export default styles;