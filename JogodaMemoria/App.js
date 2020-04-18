
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
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

    this.cards = [12]

    this.initialState = {
      allCards: [12],
      firstCard: '',
      secondCard: '',
      compare: false,
      fetcheds: [],
      showModal: true
    }

    this.state = this.initialState;
  }



  checkCards = (firstCard, secondCard) => {
    const card1 = this.cards.find((card) => card.props.akey === firstCard);
    const card2 = this.cards.find((card) => card.props.akey === secondCard);

    console.log(card1.props.nameIcon,card2.props.nameIcon)

    if (card1.props.nameIcon === card2.props.nameIcon) {
      console.log("São iguais", firstCard, secondCard);
      //setar no Cartao a propriedade de que ja tem seu par
    } else {
      setTimeout(
        () => { 
          card1.setState({ isActivate: false });
          card2.setState({ isActivate: false });
       }, 1000);
    }
  }

  handleCard = (keyCard) => {
    console.log(keyCard);

    if (!this.state.compare) {
      this.setState({ firstCard: keyCard, compare: true });
    } else {
      this.setState(
        { secondCard: keyCard, compare: false },
        () => { this.checkCards(this.state.firstCard, this.state.secondCard) }
      );
    }
  }

  saveStatus = (cards) => { 
    this.setState({ allCards: cards })
  }

  renderCards = () => {
    //função que cria o layout dos cartões
    const shuffled = shuffleArray(nameIcons)

    let cards = shuffled.map((nameIcon, index) => {
      return <Card ref={nameIcon => this.cards[index] = nameIcon} nameIcon={nameIcon} akey={'card' + index} handleCard={this.handleCard.bind(this)} key={'card' + index} />
    });

    this.saveStatus(cards)

    return cards;
  }

  closedModal = () => {
    this.setState({ showModal: false })
  }

  renderModal = () => {
    return <Modal transparent={true} visible={this.state.showModal}>
      <View style={styles.modal}>
        <View style={styles.modalIn}>
          <Text style={styles.titleGame}>Jogo da Memória</Text>
          <TouchableOpacity style={styles.button}
            onPress={this.closedModal}>
            <Text style={{ fontSize: 20, color: 'white' }}>Jogar</Text>
          </TouchableOpacity>
        </View>
      </View>

    </Modal>
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderModal()}
        <View style={styles.cardsGrid}>
          {this.renderCards()}
        </View>

      </View>

    )
  }
}

/*<Modal transparent={true} visible={this.state.showModal}>
          <View style={styles.modal}>
            <View style={styles.modalIn}>
              <Text style={styles.titleGame}>Jogo da Memória</Text>
              <TouchableOpacity style={styles.button}
              onPress={this.closedModal()}>
                  <Text style={{fontSize:20, color:'white'}}>Jogar</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  cardsGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25.
  },

  titleGame: {
    marginLeft: 50,
    fontSize: 50,
    margin: 10,
  },

  modal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },

  modalIn: {
    backgroundColor: '#ffff',
    margin: 50,
    width: '75%',
    height: '50%',
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: "red",
    width: '65%',
    height: '20%',
    margin: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'

  }

})