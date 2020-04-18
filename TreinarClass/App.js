import React, { Component } from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';

import { styles } from './src/Estilos';

import Relogio from './src/components/Relogio';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Horario</Text>
        <Relogio />

      </View>
    );
  }

};

