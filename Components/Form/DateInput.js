import React from 'react'
import {Button, StyleSheet, View} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

export default class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            mode: 'date',
            show: false
        };
    }

    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.date;
        if (this.state.mode === 'date') {
            this.setState({
                date: currentDate,
                mode: 'time',
                show: true
            });
        } else {
            this.setState({
                date: currentDate,
                show: false
            }, ()=>{
                this.props.onChange(currentDate);
            });
        }
    };

    render() {
        const {item} = this.props;

        return (
            <View>
                <View>
                    <Button onPress={() => this.setState({show: true, mode: 'date'})} title="Show date picker!"/>
                </View>
                {this.state.show && (<DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.onChange}
                />)}
            </View>
        )
    }
}

const styles = StyleSheet.create({});
