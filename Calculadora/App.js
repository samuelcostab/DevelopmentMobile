import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Buttons from './src/components/Buttons';

const buttons = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
];



export default class App extends Component {

  constructor() {
    super();
    this.initialState = {
      displayValue: '0',
      operator: null,
      firstValue: '',
      secondValue: '',
      nextValue: false,
    }

    this.state = this.initialState;

  }

  

  handleInput = (input) => {
    const { displayValue, operator, firstValue, secondValue, nextValue } = this.state;

    //fazer as operações com switch

    

    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          displayValue: displayValue === '0' ? input : displayValue + input
        });
        if(!nextValue){
          this.setState({
            firstValue: firstValue + input
          });
        }else{
          this.setState({
            secondValue: secondValue + input
          });
        }
        break;

      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          nextValue: true,
          operator: input,
          displayValue: (operator !== null ? displayValue.substr(0, displayValue.length-1) : displayValue) + input
        });
        break;

      case '.':
        let dot = displayValue.toString().slice(-1)
        this.setState({
          displayValue: dot !== '.' ? displayValue + input : displayValue
        })
        if(!nextValue){
          this.setState({
            firstValue: (displayValue === '' ? firstValue : displayValue+firstValue) + input
          });
        }else{
          this.setState({
            secondValue: secondValue + input
          });
        }
        break;

      case '=':
        let result = eval(firstValue + operator + secondValue);
        this.setState(this.initialState);
        this.setState({
          displayValue: result % 1 === 0 ? result: result.toFixed(2),
          firstValue:  result % 1 === 0 ? result: result.toFixed(2)
        })
        break;

      case 'CLEAR':
        this.setState(this.initialState);
        break;

      case 'DEL':
        let string = displayValue.toString();
        let deleteChar = string.substr(0, string.length - 1);
        let length = string.length
        this.setState({
          displayValue: length === 1 ? '0': deleteChar
        })
        if(!nextValue){
          this.setState({
            firstValue: (displayValue === '' ? firstValue : displayValue+firstValue) + input
          });
        }else{
          this.setState({
            secondValue: secondValue + input
          });
        }
        break;

    }


  }

  renderButtons() {
    //função que cria o layout dos botões da calculadora
    // para cada botão é atribuido um valor e organizados em grade

    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <Buttons
          value={buttonItems}
          key={'btn' + buttonIndex}
          handleOnPress={this.handleInput.bind(this)}
        />
      });

      return <View style={styles.inputRow} key={'row' + index}>{rowItem}</View>

    });

    return layouts;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}> {this.state.displayValue} </Text>
        </View>

        <View style={styles.inputsContainer}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  numbersKeyboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "yellow",
    height: 400,
    width: '100%',
  },
  resultContainer: {
    flex: 2,
    backgroundColor: '#1E1240',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  inputsContainer: {
    flex: 8,
    backgroundColor: '#3D0075'
  },
  resultText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 80
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  }

});