import * as React from 'react';
import Login from '../Components/Login';


export default function LoginScreen({ navigation }) {
    return (
        <Login onLogin={() => navigation.navigate('List')}/>
    );
}
