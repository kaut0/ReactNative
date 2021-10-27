import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Tambah from "./src/component/add";
import Item from "./src/component/flatlist";
import Headers from "./src/component/headers";

export default function App() {
  const [data, setData] = useState([
    { nama: "nama", id: 1 },
    { nama: "namaa", id: 2 },
    { nama: "namaaa", id: 3 },
  ]);

  const onPress = (id) => {
    //parameter yang ada pada function prevData merupakan
    // Parameter yang terdapat pada setdata
    setData((prevData) => {
      return prevData.filter((data) => data.id != id);
    });
  };

  // const onPress = (text)=>{
  //   setData((data)=>{
  //     return [
  //       ...data,
  //       { nama: text, id: Math.random().toString() }
  //     ]
  //   })
  // }

  const TambahData = (text) => {
    if (text.length > 3) {
      //parameter yang ada pada function prevData merupakan
      // Parameter yang terdapat pada setdata
      setData((prevData) => {
        return [...data, { nama: text, id: Math.random().toString() }];
      });
    }else{
      Alert.alert("Alert", "Maaf Kurang Gan", [
        {
          text: "Batalkan",
          onPress: () => console.log("Makan"),
        },
      ]);
    }
    
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
          <Headers />
        <View style={styles.heading}>
          <Tambah TambahData={TambahData} />
          <View style={styles.components}>
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return <Item item={item} onPress={onPress} />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    paddingTop: 40,
    flex: 1,
  },
  components: {
    flex:1
  }
});
