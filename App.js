import 'react-native-gesture-handler';
import * as React from 'react';
import LoginScreen from './Screen/LoginScreen';
import ListScreen from './Screen/ListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer initialRouteName="Login">
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="List" component={ListScreen} options={{headerLeft: null}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
