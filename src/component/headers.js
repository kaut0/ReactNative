import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

function Headers() {

    return ( 
        <View style={styles.Heading}>
            <Text style={styles.text}>Flat List</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    Heading: {
        backgroundColor: "pink",
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})

 
export default Headers;