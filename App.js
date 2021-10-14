import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

  const [kata, setKata] = useState('Makan');
  const [person, setPerson] = useState({ name: 'abang garong', age: 45 }) 
  const [input, setInput] = useState(null);

  const onPress = ()=>{
    setKata('Marimas')
    setPerson({name: 'arjuna', age: 20})
  }

  const reset = ()=>{
    setKata('makan')
    setPerson({name: 'abang garong', age: 45})
  }

  const inputText = ()=>{
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput value={input}></TextInput>
      </View>
      <Text>{ kata }</Text>
      <Text>Aku adalah {person.name} dan umurku adalah {person.age}</Text>
      <View style={styles.buttonConatiner}>
        <Button title='push' onPress={ onPress } />
        <Text></Text>
        <Button title='rest' onPress={ reset } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConatiner: {
    marginTop: 10,
  },
  textInput:{
    borderColor: 'red',
    borderRadius: 10,
    padding: 20
  }

});
