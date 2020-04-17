import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Card extends Component {

    constructor(props){
        super(props);
        const {nameIcon, akey} = this.props

        this.state = {
            isActivate: false,
            nameIcon: nameIcon,
            akey: akey
        }
    }


    renderIcon(){
        if(this.state.isActivate)
            return <Icon name={this.state.nameIcon} size={75} color="#fff" />
    }

    render() {
        const {handleCard, desativeCard} = this.props
        return (
            <View>
                <TouchableOpacity style={styles.card} onPress={() => {handleCard(this.state.akey), this.setState({isActivate: true})} }>
                   {this.renderIcon()}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 115,
        height: 115,
        margin: 5,
        backgroundColor: 'red',
        borderRadius: 10,
    }
})