import { StyleSheet } from 'react-native';
import { pokeTheme } from '../../Themes/pokeCardTheme';

const styles = StyleSheet.create({
    cont:{
        backgroundColor: pokeTheme.background,
        width: '100%',
        height: '100%',
    },
    btnG:{
        backgroundColor: pokeTheme.backSelect,
        marginTop: 80,
        height: '35%',
        width: '90%',
        left: 20, 
        borderRadius: 40,
        elevation: 5,
    },
    pokeImg1:{
      top: 80,
      left: 120,
      width: 100,
      height: 100,
      position: 'absolute',
      zIndex: 2,
    },
    pokeImg2:{
        top: 70,
        left: 198,
        width: 100,
        height: 110,
        position: 'absolute',
        zIndex: 1,

    },
    pokeImg3:{
      bottom: 80,
      left: 50,
      width: 100,
      height: 110,
      position: 'absolute',
      zIndex: 2,
    },
    pokeImg4:{
      top: 60,
      left: 136,
      width: 120,
      height: 120,
      position: 'absolute',
      zIndex: 1,
    },
    pokeImg5:{
        top: 80,
        left: 40,
        width: 110,
        height: 110,
        position: 'absolute',
        zIndex: 2,

    },
    pokeImg6:{
      bottom: 80,
      left: 193,
      width: 120,
      height: 120,
      position: 'absolute',
      zIndex: 2,
    },
    pokeGenText:{
        position: 'absolute',
        alignSelf: 'center',
        top: 190,
        fontSize: 50,
        color: pokeTheme.white,
        fontWeight: 'bold',
    },
    pokeCard:{
      height: 200,
      width: 200,
      left: 160,
      top: 110,
    },
    pokePattern:{
      left: 50,
      bottom: 215,
      width: 150,
      height: 150,
    },
});
export default styles;