import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

import "localstorage-polyfill";

// import AsyncStorage from "@react-native-async-storage/async-storage";

const Mon_URL = "http://192.168.1.41:4000";

function Acceuil(props) {
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const [username, setusername] = useState("user");
  const [nickname, setNickname] = useState();

  const getData = async () => {
    console.log("hello world");
    const items = JSON.parse(localStorage.getItem("username"));
    console.log("doyou ", props);
    if (items) {
      console.log("im her", items);
      setusername(items);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // function updateSearch(value) {
  //   //do your search logic or anything
  // }

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <ImageBackground source={require("../assets/img/B13.png")}>
        <View style={styles.ImageX}>
          <Image
            style={styles.ImageX1}
            source={require("../assets/img/i66.png")}
            alt=" ImagePharmacie"
          />
        </View>

        <View style={styles.Middle}>
          <Text style={styles.BiText}>Bonjour,{username}! </Text>
          <Text style={styles.Bi1Text}>Que chercher vous ?</Text>
        </View>

        {/*Buttons Pharmacie - produits - Localisation */}

        <View style={styles.button12}>
          <View style={styles.button1}>
            <TouchableHighlight>
              <Button
                style={styles.buttonDesign}
                onPress={() => navigation.navigate("Pharmacie")}
              >
                <Text style={styles.textbu}>Pharmacie</Text>{" "}
              </Button>
            </TouchableHighlight>
          </View>

          <View style={styles.button2}>
            <TouchableHighlight>
              <Button
                style={styles.buttonDesign}
                onPress={() => navigation.navigate("Produit")}
              >
                <Text style={styles.textbu}> Produits</Text>
              </Button>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.button3}>
          <TouchableHighlight>
            <Button
              style={styles.buttonDesign3}
              onPress={() => navigation.navigate("Localisation")}
            >
              <Text style={styles.textbu}> Localisation</Text>
            </Button>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
    </NativeBaseProvider>
  );
}

// export default () => {
  //   return (
    //     <NativeBaseProvider>
    //       <Acceuil />
    //     </NativeBaseProvider>
//   );
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  
  BiText: {
    fontFamily: "monospace",
    color: "#344372",
    marginTop: 30,
    fontSize: 20,
    marginLeft: 30,
  },
  Bi1Text: {
    fontFamily: "monospace",
    color: "#707070",
    fontSize: 18,
    marginLeft: 30,
    paddingBottom: 20,
  },
  
  textbu: {
    fontSize: 21,
    color: "white",
  },
  
  ImageX1: {
    marginTop: 20,
    marginRight: 5,
    width: "60%",
    height: 170,
  },
  
  ImageX: {
    marginTop: 10,
    marginRight: 5,
    width: "93%",
    height: 200,
    backgroundColor: "#4FCAFF",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  button12: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  
  buttonDesign: {
    backgroundColor: "#28B463",
    alignItems: "center",
    paddingTop: 55,
    borderRadius: 10,
  },
  
  button1: {
    backgroundColor: "#28B463",
    marginTop: 20,
    width: "40%",
    height: "110%",
    marginLeft: 20,
    elevation: 8,
    borderRadius: 10,
  },
  button2: {
    backgroundColor: "#28B463",
    width: "40%",
    height: "110%",
    marginTop: 20,
    marginLeft: 30,
    borderRadius: 10,
  },
  
  button3: {
    paddingTop: 50,
    paddingLeft: '5%',
    paddingRight: '8%',
  },
  
  buttonDesign3: {
    backgroundColor: "#28B463",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default Acceuil