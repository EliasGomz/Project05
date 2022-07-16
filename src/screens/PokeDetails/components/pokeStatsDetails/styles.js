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
        fontSize: 30,
        alignSelf: 'center',
        top: 30,
        fontWeight: 'bold',
    },
    contStats:{
        alignItems: 'flex-end',
        marginRight: 10,
        top: 45,
    },
    contTexStats:{
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
    },
    lineSeparator:{
        backgroundColor: 'red',
        height: 150,
        width: 2,
        marginRight: 10,
        top: 50
    },
    contS:{
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contStatsN:{
        top: 45,
    },
    contStatsNum:{
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
    },
    startLine:{
        marginVertical: 6,
        height: 5,
        marginLeft: 5,
        borderRadius: 5,
        backgroundColor: 'red',
        width: 10,
        marginTop: 16
    },
    contStatsL:{
        top: 45,
    },
});
export default styles;