import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";
import store from "../../app/store";
import { Provider } from 'react-redux';
import Counter from "../counter";
import FirstPokeGen from "../../components/firstPokeGen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const HomePage = () => {

    return (
        <Provider store={store}>
            <Counter />
        </Provider>
        // <KeyboardAwareScrollView>
        //     <FirstPokeGen />
        // </KeyboardAwareScrollView>     
    )

};
export default HomePage;