import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


function Tambah({TambahData}) {

    const [text, setText] = useState('')

    const textInput = (val) => {
        setText(val)
    }

    return ( 
        <View>
            <TextInput placeholder='Tambahkan Text' style={styles.tambah} onChangeText={textInput} />
            <Button title='Tambah' onPress={()=>TambahData(text)} />
        </View>
     );
}

export default Tambah;

const styles = StyleSheet.create({
    tambah: {
        borderBottomColor: "blue",
    }
})