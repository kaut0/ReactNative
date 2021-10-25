import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

function Flatlist({data}) {
    return ( 
        <View style={styles.data}>
            <FlatList data={data} renderItem={({item})=>{
              return <Text style={styles.item}>{item.nama}</Text>
            }}
            keyExtractor={item => item.id}
            />
        </View>
     );
}
export default Flatlist;

const styles = StyleSheet.create({
    data: {

    }
})