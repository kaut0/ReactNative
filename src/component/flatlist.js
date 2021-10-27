import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Item({item, onPress}) {
    return ( 
        <TouchableOpacity onPress={()=>onPress(item.id)}>
            <View style={styles.data}>
                <AntDesign name='delete' size={24} color={black} />
                <Text style={text}>{item.nama}</Text>
            </View>
        </TouchableOpacity>
     );
}
export default Item;

const styles = StyleSheet.create({
    data: {
        padding: 16,
        paddingTop: 12,
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        borderColor: "black",
        margin: 10,
        backgroundColor: "pink",
        flexDirection: 'row'
    },
    text:{
        marginLeft: 5,
        
    }
})