import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'

//screens
import PokeGenSelect from "../screens/PokeGenSelect/index";
import PokView from "../screens/PokeView/pokeView";
import PokeExtractor from "../components/pokeExtractor";
import PokeDetails from "../screens/PokeDetails";
import { TouchableOpacity } from "react-native";

const HomeStack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <HomeStack.Navigator
        initialRouteName="Home"
        >
            <HomeStack.Screen 
                name="Home"
                component={PokeGenSelect}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen 
                name="pokeView"
                component={PokView}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen 
                name="PokeDetails"
                component={PokeDetails}
                options={{
                    title: '',
                    animation:'slide_from_right',
                    headerShown: false,
                }}
            />
        </HomeStack.Navigator>
    )
}

const Navigation = () => {
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
export default Navigation;
