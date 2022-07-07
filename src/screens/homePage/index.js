import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";
import store from "../../app/store";
import { Provider } from 'react-redux';
import FirstPokeGen from "../../components/firstPokeGen/pokeDetails";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "../header";


const HomePage = () => {

    return (
        <Provider store={store}>
            <Header />
            <KeyboardAwareScrollView>
                <FirstPokeGen />
            </KeyboardAwareScrollView>  
        </Provider>
           
    )

};
export default HomePage;