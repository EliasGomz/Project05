import { StyleSheet } from 'react-native';
import { pokeTheme } from '../../../../../../Themes/pokeCardTheme';

const styles = StyleSheet.create({
    pokeTypes:{
        left: 10,
        top: 60,
    },    
    poketypeText:{
         color: pokeTheme.white,
         height: 22,
         width: 55,
         borderRadius: 40,
         textAlign: 'center',
         bottom: 50,
         marginTop: 10,
         left: 5,
    },
});
export default styles;