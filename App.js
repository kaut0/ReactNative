import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Tambah from './src/component/add';
import Item from './src/component/flatlist';
import Headers from './src/component/headers';


export default function App() {

  const [data, setData] = useState([
    {nama:'nama', id:1},
    {nama:'namaa', id:2},
    {nama:'namaaa', id:3},
  ])

  const onPress = (id)=>{
    setData((prevData)=>{
      return prevData.filter(data=> data.id != id)
    })
  }

  // const onPress = (text)=>{
  //   setData((data)=>{
  //     return [
  //       ...data,
  //       { nama: text, id: Math.random().toString() }
  //     ]
  //   })
  // }

  const TambahData = (text)=>{
    setData((prevData)=>{
      return[
        ...data,
        {nama: text, id: Math.random().toString()}
      ]
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
      <Headers />
        <Tambah TambahData={TambahData} />
        <View style={styles.components}>
            <FlatList data={data} renderItem={({item})=>{
             return <Item item={item} onPress={onPress} />
            }}
            keyExtractor={item => item.id}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  heading:{
    paddingTop: 40
  }

});
