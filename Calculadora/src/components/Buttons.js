import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';



export default class Buttons extends Component {

  render(){
    const { value, handleOnPress } = this.props;

    return(
        <TouchableOpacity 
         style={styles.container}
         onPress={() => handleOnPress(value) } >
         <Text style={styles.text}>{value}</Text>

        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:1,
        justifyContent: 'center',
        backgroundColor: '#3232ff',
        alignItems: 'center',

    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
    },


});