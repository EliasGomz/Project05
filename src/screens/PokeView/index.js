import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, View} from "react-native";
import PokeExtractor from "../../components/pokeExtractor";
import styles from "./styles";
import pokeImg from "../../Assets/icons/iconsCards/PokeCard.png"
import RenderPokemon from '../../components/pokeRender'
import Header from '../../components/header'
import LoadImg from  '../../Assets/icons/iconLoading/loading.png'

const PokeView = ({PokeDetails, isLoading}) => {

    const keyExtractor= (item, index) => `${index}-${item}`;
    return (     
        <>  
            <FlatList 
                style={styles.pokeRender}
                data={PokeDetails} 
                numColumns={2}
                contentContainerStyle={{paddingBottom: 30}}
                keyExtractor={keyExtractor}
                renderItem={({item}) => <RenderPokemon item={item} />}
                ListEmptyComponent={() => (
                    <>
                        {isLoading && (
                            <View style={styles.LoadC}>
                            <Image 
                                resizeMode='contain'
                                style={styles.Load} 
                                source={LoadImg}
                            />
                            </View>
                         )}
                    </>
                )}
                 initialNumToRender={10}
                 maxToRenderPerBatch={8}
             />
            
        </>   
    )
};
export default PokeView;