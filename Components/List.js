import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Item from './Item';
import {ItemAPIService} from '../Service/API/ItemAPIService';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.term = '';
        this.state = {
            films: [],
            isLoading: false
        };
        this.itemAPIService = new ItemAPIService();
        this._load();
    }

    _load() {
        this.setState({isLoading: true});
        this.itemAPIService.search(this.term).then(data => {
            this.setState({items: data, isLoading: false});
        });
    }

    _search(text) {
        this.term = text;
    }

    _refresh() {
        this.setState({items: []}, () => this._load());
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
                <View style={styles.form_container}>
                    <TextInput
                        onChangeText={(text) => this._search(text)}
                        style={styles.form_text_input}
                        placeholder="Titre du film"
                        onSubmitEditing={() => this._refresh()}/>
                    <TouchableOpacity onPress={() => this._load()} style={styles.form_button}>
                        <Icon name='search' style={{fontSize: 30}}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.list_container}
                    data={this.state.items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Item item={item}/>}
                />
                {this._displayLoading()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    form_container: {
        flexDirection: 'row'
    },
    list_container: {},
    form_text_input: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderBottomWidth: 1,
        paddingLeft: 5,
        flex: 4,
    },
    form_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
