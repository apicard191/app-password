import * as React from 'react';
import {Button, View} from "react-native";
import ShowItem from "../Components/Item/ShowItem";
import DateInput from "../Components/Form/DateInput";
import itemManager from '../Service/Manager/ItemManager';

export default class CheckoutScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        return (
            <View>
                <ShowItem item={itemManager.get(this.props.route.params.id)}/>
                <DateInput onChange={(date)=>{console.log(date)}}/>
            </View>
        )
    }
}
