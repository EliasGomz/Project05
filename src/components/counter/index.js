import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    Button,
} from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from "../../features/counter";



const Counter = () => {
    const count = useSelector((state) => state.reducer.value)
    const dispatch = useDispatch()

    console.log(count);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="Incre" onPress={() => dispatch(increment())} />
                <Text>{count}</Text>
            <Button title="Decre" onPress={() => dispatch(decrement())} />
        </View>
    );
};
export default Counter;