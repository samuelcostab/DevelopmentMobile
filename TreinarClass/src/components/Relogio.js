import React, {Component} from 'react';
import {View, Text } from 'react-native';


export default class Relogio extends Component {
    state = {
        horario: new Date(),
    }

    tique(){
        this.setState({horario: new Date()});
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tique(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return (
            <View>
                <Text>{this.state.horario.toLocaleTimeString()}</Text>
            </View>
        );
    };
}
