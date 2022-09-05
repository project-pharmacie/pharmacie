import React, { useState, setState,useEffect } from "react";
import axios from "axios" ;
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  NativeBaseProvider,
  Image,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Searchbar from "../Shared/SearchBar";

const Mon_URL = "http://192.168.1.20:4000";

// const data = [
//   { id: "1", title: "EFFERALGANT " },
//   { id: "2", title: "DOLIPRANE" },
//   { id: "3", title: "VOLTARENE" },
//   { id: "4", title: "DAFALGAN" },
//   { id: "5", title: "LEVOTHYROX" },
//   { id: "6", title: "IMODUIM" },
//   { id: "7", title: "KARDEGIC" },
//   { id: "8", title: "IXPRIM" },
//   { id: "9", title: "FORLAX" },
//   { id: "10", title: "GAVISCON" }
// ];

function Produit(props) {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);

  
  const [produit, setproduit] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(Mon_URL + "/produit/").then((res) => {
      let data = res.data;
      setproduit(data);

    });
    chercheProduitN()
  }, [value]);

 chercheProduitN = () => {
  axios.get(Mon_URL + "/produit/" +value).then((res) => {
//console.log(res.data , "=>>>>>>>>")
  setproduit(res.data)

 })

}
 
  
  

  return (

    <View style={styles.container}>
          {/* <View>
            <Text>{value.title}</Text>
          </View> */}

      <View
        style={{ height: "20%", backgroundColor: "white", borderRadius: 10 }}
      >
        <Searchbar
          value={value}
          onChangeText={setValue}
          style={{ marginTop: "8%" }}
        />

        <View style={styles.ImageX}>
          <Image
            source={require("../assets/img/listegreen.png")}
            alt=" ImagePharmacie"
          />

          <Image
            source={require("../assets/img/blocgreen.png")}
            alt=" ImagePharmacie"
          />
        </View>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={produit}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Pharmacie")}
              >
                <Text style={styles.listItemText}>{item.nom}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#F8F8F8" }} />
      </View>
    </View>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <Produit />
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    width: "100%"
  },

  flatList: {
    justifyContent: "space-between",
    paddingBottom: 20,
    flex: 1
    // alignItems: 'center'
  },

  text: {
    fontSize: 20,
    color: "#101010",
    marginTop: 60,
    fontWeight: "700"
  },

  ImageX: {
    flexDirection: "row",
    paddingRight: 18,
    paddingLeft: 280,
    justifyContent: "space-between"
  },

  listItem: {
    marginBottom: 20,
    marginRight: 40,
    marginLeft: 20,
    //marginTop: 10,
    paddingBottom: 20,
    padding: 20,
    alignItems: "center",
    borderColor: "#F8F8F8",
    backgroundColor: "white",
    borderWidth: 2,
    width: "90%",
    borderRadius: 15
  },

  listItemText: {
    fontSize: 14
  },

  lineStyle: {
    flexDirection: "row",
    marginBottom: 20,
    // marginTop:80,
    // marginLeft:15,
    // marginRight:15,
    alignItems: "center"
  }
});
