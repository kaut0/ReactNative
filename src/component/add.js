import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


function Tambah({TambahData}) {

    const [text, setText] = useState('')

    const textInput = (val) => {
        setText(val)
    }

    return ( 
        <View>
            <TextInput placeholder='Tambahkan Text' style={styles.tambah} onChangeText={textInput} />
            {/* <Button title='Tambah' onPress={()=>TambahData(text)} /> */}
            <TouchableOpacity style={styles.buttonAdd} onPress={()=>TambahData(text)}>
                <Text style={styles.text}>Tambah</Text>
            </TouchableOpacity>
        </View>
        
     );
}

export default Tambah;

const styles = StyleSheet.create({
    tambah: {
        borderBottomColor: "black",
        margin: 10,
        borderBottomWidth: 1,

    },
    buttonAdd:{
        margin: 15,
        padding: 5,
        backgroundColor: "pink",
        alignContent: "center",
        borderRadius: 10,
        justifyContent: "center"
    },
    text:{
        color: "black",
        textAlign: "center"
    }
})