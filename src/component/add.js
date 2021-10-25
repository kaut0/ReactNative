import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


function Tambah({onPress}) {

    const [text, setText] = useState('')

    const textInput = (val) => {
        setText(val)
    }

    return ( 
        <View>
            <TextInput placeholder='Tambahkan Text' onChange={()=>textInput(val)} style={styles.tambah} />
            <Button title='Tambah' onPress={()=>onPress(text)} />
        </View>
     );
}

export default Tambah;

const styles = StyleSheet.create({
    tambah: {
        borderBottomColor: "blue",
    }
})