import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import PokemonBridge from "./components/PokeBridgeEvolution";
import HeaderDetails from "./components/headerDetails";
import PokeAboutDetails from "./components/pokeAboutDetails";
import PokeStatsDetails from "./components/pokeStatsDetails";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import tabImg from '../../Assets/icons/iconsCards/PokeCard.png'
import { pokeTheme } from "../../Themes/pokeCardTheme";




const PokeDetails = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'About', title: 'About' },
      { key: 'Stats', title: 'Stats' },
      { key: 'Evolution', title: 'Evolution' },
    ]);

    const route = useRoute();
    const item = route.params.item;
    const evolt = item.species.url;
    const type = item.types[0].type.name;
  
    const PokeAbout = () => (
        <PokeAboutDetails   
            item={item} 
        />
    );
      
     const pokeStats = () => (
        <PokeStatsDetails 
            item={item}
         />
    );
     
    const Evolution = () => (
        <PokemonBridge 
            item={item}
            evolt={evolt}
        />
    );

    const renderScene = SceneMap({
        About: PokeAbout,
        Stats: pokeStats,
        Evolution: Evolution,
    });
  
    return (
        <>
            <HeaderDetails 
                item={item}
            />

            <TabView 
                style={styles.tabView}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={routes =>
                    <TabBar 
                        {...routes}
                        indicatorStyle={{ backgroundColor: 'white' }}
                        inactiveColor={'black'}
                        pressColor={pokeTheme[type]}
                        labelStyle={{fontSize: 15, fontWeight: 'bold',}}
                        indicatorContainerStyle={{width: 300, left: 15}}
                        style={{ backgroundColor: pokeTheme[type], }}
                        renderIcon={({ route}) => ( 
                            <Image 
                                style={styles.iconTab}
                                source={tabImg}
                            />
                          )}
                    />
                }
                onIndexChange={setIndex}
            />
        </>
    );
}
export default PokeDetails;
