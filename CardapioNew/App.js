import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Button } from 'react-native';
import MenuDay from './src/components/MenuDay';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const menuDays = [
  {
    id: "01",
    day: "Segunda-Feira",
    description: "Arroz com Frango e Bacon",
  },
  {
    id: "02",
    day: "Terça-Feira",
    description: "Feijoada com Arroz Tropeiro",
  },
  {
    id: "03",
    day: "Quarta-Feira",
    description: "Figada com Cuscuz",
  },
  {
    id: "04",
    day: "Quinta-Feira",
    description: "Bife Acebolado com Baião",
  },
  {
    id: "05",
    day: "Sexta-Feira",
    description: "Maminha assada com Arroz e Marcarrão",
  }
];

/* <FlatList
            data={menuDays}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <MenuDay menuDay={item} />
              )
            }}
          /> */

export default class App extends Component {
  state = {
    indexMenuDays: 1,
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.boxTitle}>

          <ImageBackground style={styles.imgBackground}
            resizeMode='cover'
            source={require('./src/img/imgPlace.jpg')}>
            <Text style={styles.titleBox}>Bem vindo ao Cardápio Bom</Text>
            <Text style={styles.subTitleBox}>Acompanhe os pratos da semana</Text>
          </ImageBackground>
        </View>

        <View style={styles.buttonsBox}>
          <TouchableOpacity style={styles.buttonStyle}
          onPress={() => {
              this.setState({ indexMenuDays: 0 })
            }}>
            <Text style={styles.subTitleBox}>Segunda-feira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}
          onPress={() => {
              this.setState({ indexMenuDays: 1 })
            }}>
            <Text style={styles.subTitleBox}>Terça-feira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}
          onPress={() => {
              this.setState({ indexMenuDays: 2 })
            }}>
            <Text style={styles.subTitleBox}>Quarta-feira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}
          onPress={() => {
              this.setState({ indexMenuDays: 3 })
            }}>
            <Text style={styles.subTitleBox}>Quinta-feira</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}
          onPress={() => {
              this.setState({ indexMenuDays: 4 })
            }}>
            <Text style={styles.subTitleBox}>Sexta-feira</Text>
          </TouchableOpacity>
          
        </View>
        
        <View style={styles.listMenuDay}>
          <MenuDay menuDay={menuDays[this.state.indexMenuDays]} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxTitle: {
    backgroundColor: "#8B0000",
    width: "100%",
    height: "25%",
    borderBottomWidth: 3,
    borderBottomColor: "#8B0000",
    flex: 1,
  },
  titleBox: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subTitleBox: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  buttonsBox: {
    flex: 2,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle:{
    backgroundColor: "#8B0000",
    width: 300,
    height:40,
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.7,

  },
  imgBackground: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  listMenuDay: {
    flex: 1,
    marginBottom: 25,
  }


});