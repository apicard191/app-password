import React from 'react'
import {ActivityIndicator, AsyncStorage, Button, StyleSheet, Text, TextInput, View} from 'react-native'
import {UserService} from '../Service/UserService';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.username = '';
        this.password = '';
        this.state = {
            isLoading: false,
            hasError: false
        };
        this.userService = new UserService();
    }

    _login() {
        this.userService.login(this.username, this.password);
        this.setState({isLoading: true, hasError: false});
        this.userService.login().then(data => {
            this.setState({isLoading: false});
        }).fail(data => {
            this.setState({hasError: true});
        });
    }

    _displayError() {
        if (this.state.hasError) {
            return (
                <Text style={styles.form_error}>Connection impossible</Text>
            );
        }
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.top_container}>
                </View>
                <View style={styles.form_container}>
                    {this._displayError()}
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}/>
                        <TextInput
                            onChangeText={(username) => this.username = username}
                            style={styles.input}
                            placeholder="Username"
                            autoCompleteType="username"/>
                        <View style={{flex: 1}}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}/>
                        <TextInput
                            onChangeText={(password) => this.password = password}
                            style={styles.input}
                            placeholder="Password"
                            autoCompleteType="password"
                            secureTextEntry={true}
                        />
                        <View style={{flex: 1}}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}/>
                        <Button
                            color="orange"
                            title="Login"
                            onPress={() => this._login()}/>
                        <View style={{flex: 1}}/>
                    </View>
                    {this._displayLoading()}
                </View>
                <View style={styles.bottom_container}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1,
    },
    top_container: {
        flex: 1,
    },
    form_container: {
        flex: 1,
        alignItems: 'center',
    },
    bottom_container: {
        flex: 1,
    },
    form_error: {
        flex: 1,
        color: '#F00',
    },
    input: {
        flex: 8,
        height: 50,
        paddingLeft: 5,
        marginBottom: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: 1
    },
    loading_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
