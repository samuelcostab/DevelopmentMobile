import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
       color:'white',
       fontWeight:'bold',
       fontSize: 44,
       marginBottom: 10,
       borderBottomWidth: 3,
       borderBottomColor: 'white'
    },
    resultado:{
        borderWidth: 2,
        borderColor: 'white',
        color:'red',
        fontWeight:'bold',
        fontSize: 22,
        padding: 5,
        marginBottom: 10,
    },
    valor:{
        color:'yellow',
        fontSize: 22,
    }

  });