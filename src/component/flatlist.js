import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Item({item, onPress}) {
    return ( 
        <TouchableOpacity onPress={()=>onPress(item.id)}>
            <Text style={styles.data}>{item.nama}</Text>
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
        borderRadius: 10
    }
})