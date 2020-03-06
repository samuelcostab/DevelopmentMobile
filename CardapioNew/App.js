import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, FlatList } from 'react-native';
import MenuDay from './src/components/MenuDay';

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

export default class App extends Component {
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

        <View style={styles.listMenuDay}>
          <FlatList
            data={menuDays}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <MenuDay menuDay={item} />
              )
            }}
          />
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
  boxShadow: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#8B0000",
    opacity: 0.7,
    borderRadius: 30,
  },
  titleBox: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subTitleBox: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
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
    flex: 2
  }


});