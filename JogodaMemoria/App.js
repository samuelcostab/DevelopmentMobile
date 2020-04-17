
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Card from './src/component/Card';


const nameIcons = [
  'food-fork-drink',
  'alien',
  'brightness-2',
  'controller-classic',
  'corn',
  'dice-6',
  'food-fork-drink',
  'alien',
  'brightness-2',
  'controller-classic',
  'corn',
  'dice-6'
]

const shuffleArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


export default class App extends Component {

  constructor() {
    super();  

    this.initialState = {
      allCards: [],
      firstCard: '',
      secondCard: '',
      compare: false,
      fetcheds: [],
      keysNonFetched: [],
    }
  }

  componentWillMount(){
    this.setState(this.initialState);

    const cards = this.renderCards();

    this.setState({allCards:cards})
  }

  checkCards = (firstCard, secondCard) => {
    const card1 = this.state.allCards.find((card) => card.key === firstCard);
    const card2 = this.state.allCards.find((card) => card.key === secondCard);

    if (card1.props.nameIcon === card2.props.nameIcon) {
      console.log("São iguais", firstCard, secondCard);
      //setar no Cartao a propriedade de que ja tem seu par
    }else{
      card1.setState({isActivate: false});
    }

  }

  desativeCard(){
    this.setState({isActivate:false});
  }

  handleCard = (keyCard) => {
    console.log(keyCard);


    if (!this.state.compare) {
      this.setState({ firstCard: keyCard, compare: true});
    } else {
        this.setState(
          {secondCard: keyCard,compare: false},
          () => { this.checkCards(this.state.firstCard, this.state.secondCard) }
        );
    }
      

  }

  renderCards() {
    //função que cria o layout dos cartões
    const shuffled = shuffleArray(nameIcons)

    let cards = shuffled.map((nameIcon, index) => {
      return <Card nameIcon={nameIcon} akey={'card'+index} handleCard={this.handleCard.bind(this)} desativeCard={this.desativeCard.bind(this)} key={'card'+index} />
    });

    return cards;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Jogo da Memória</Text>
        <View style={styles.cardsGrid}>
          {this.state.allCards}
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  cardsGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
})