import 'react-native-gesture-handler';
import * as React from 'react';
import CheckoutScreen from './Screen/CheckoutScreen';
import ItemScreen from './Screen/ItemScreen';
import ListScreen from './Screen/ListScreen';
import LoginScreen from './Screen/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer initialRouteName="Login">
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="List" component={ListScreen} options={{headerLeft: null}} />
                <Stack.Screen name="item_show" component={ItemScreen} />
                <Stack.Screen name="checkout" component={CheckoutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
