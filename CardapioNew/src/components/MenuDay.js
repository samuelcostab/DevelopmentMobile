import React from 'react';
import { StyleSheet, Text, View, fontAwesome } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
Icon.loadFont();



export default MenuDay = (props) => {
    //const { day, description } = props.menuDay;
    return (
        <View style={styles.container}>
            <Text style={styles.titleDay}> {props.menuDay.day} </Text>
            <Text style={{ color: "white", margin: 5, fontSize: 17 }}> Prato do dia: </Text>
            <View style={styles.boxMenu}>
                <Icon name="food-fork-drink" size={50} color="#fff" style={styles.icon} />
                <Text style={styles.description}>{props.menuDay.description} </Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8B0000',
        borderRadius: 30,
        margin: 10,
        shadowColor: "red",
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: 80,
        shadowRadius: 11.95,
        elevation: 20,

    },
    titleDay: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    boxMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 3,
        borderTopColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
       
    },
    description: {
        flex: 2,
        fontSize: 20,
        color: 'white',
        marginRight: 10,
    },
    icon: {

        marginBottom: 10,
        marginLeft: 20,
        color: "#fff",
        flex: 1,
    }
});