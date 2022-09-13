import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
  Row
} from "native-base";
import { useNavigation } from "@react-navigation/native";

import Searchbar from "../Shared/SearchBar";

const data = [
  { id: "1", title: "Pharmacie de jour Sana Gam " },
  { id: "2", title: "Pharmacie de jour Zakya Hajjar" },
  { id: "3", title: "Pharmacie de nuit Dabebi" },
  { id: "4", title: "Pharmacie de jour Zeineb belaid" },
  
];

function Pharmacie(props) {
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const [viewType, setViewType] = useState("list"); // list/bloc

  function updateSearch(value) {
    //do your search logic or anything
    console.log(value);
  }

  return (
    <View style={styles.container}>
      <View
        style={{ height: "15%", backgroundColor: "white", borderRadius: 10 }}>

        <Searchbar
          value={value}
          updateSearch={updateSearch}
          style={{ marginTop: "10%" }}
        />

        <View style={styles.ImageX}>
          <TouchableOpacity onPress={() => setViewType("list")}>
            <Image
              source={require("../assets/img/listegreen.png")}
              alt=" ImagePharmacie"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setViewType("bloc")}>
            <Image
              source={require("../assets/img/blocgreen.png")}
              alt=" ImagePharmacie"
            />
          </TouchableOpacity>

          
        </View>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={data}
          keyExtractor={(item) => viewType == "list"  ? 'l' + item.id : 'b' + item.id}
         //  numColumns={viewType == "list" ? 1 : 3}
          renderItem={({ item }) => (
            <View
              style={viewType == "list" ? styles.listItem : styles.listItemCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Localisation")}>
                <Text style={styles.listItemText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#F8F8F8" }} />
      </View>

      {/*Button localisation */}

      <View style={styles.buttonStyle}>
        <Button
          style={styles.buttonDesign2}
          onPress={() => navigation.navigate("Localisation")}
        >
          Localisation
        </Button>
      </View>
    </View>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <Pharmacie />
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

  ImageX: {
    flexDirection: "row",
    paddingRight: 18,
    paddingLeft: 280,
    justifyContent: "space-between"
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

  listContainer: {},

  listContainerCard: {
    //flexDirection: "row",
   // flexWrap: "wrap"
  },

  listItem: {
    
    marginBottom: 20,
    marginRight: 40,
    marginLeft: 20,
    paddingBottom: 20,
    padding: 20,
    alignItems: "center",
    border: "2px solid ",
    borderColor: "#F8F8F8",
    backgroundColor: "white",
    borderWidth: 2,
    width: "90%",
    borderRadius: 15
  },
  listItemCard: {
    marginBottom: 20,
    marginRight: 40,
    marginLeft: 20,
    paddingBottom: 20,
    padding: 20,
    alignItems: "center",
    borderColor: "#F8F8F8",
    backgroundColor: "white",
    borderWidth: 2,
    width: "35%",
    borderRadius: 15,
    //flexDirection:'row',
   // flexWrap:'wrap'
  },

  listItemText: {
    fontSize: 14
  },

  buttonStyle: {
    marginBottom: 50,
    marginRight: 20,
    paddingLeft: 40,
    width: "90%",
    elevation: 10
  },

  buttonDesign2: {
    height: 50,
    backgroundColor: "#2DA539",
    fontWeight: "bold"
  },

  lineStyle: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center"
  }
});
