import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/PokeColors';

const styles = StyleSheet.create({
    header:{
        backgroundColor: Colors.background,
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
        color: Colors.mediumGray,
        position: 'absolute',
        top: 160,
        left: 20,
        fontSize: 30,
        fontFamily: 'bold',
    },
});
export default styles;