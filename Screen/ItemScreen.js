import * as React from 'react';
import itemManager from '../Service/Manager/ItemManager';
import ShowItem from '../Components/Item/ShowItem';
import {Button, View} from "react-native";

export default class ItemScreen extends React.Component {
    render() {
        return (
            <View>
                <ShowItem item={itemManager.get(this.props.route.params.id)}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>
                    <Button
                        color="orange"
                        title="Book"
                        onPress={() => this.props.navigation.navigate('checkout', {id: this.props.route.params.id})}/>
                    <View style={{flex: 1}}/>
                </View>
            </View>
        )
    }
}
