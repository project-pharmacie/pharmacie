import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import axios from "axios";
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
import Searchbar from "../Shared/SearchBar";

const Mon_URL = "http://192.168.1.20:4000";

function Acceuil(props) {
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const [username, setusername] = useState("user");

  GetUser = () => {
    axios.get(Mon_URL + "/user").then((response) => {
      setusername(response.data[0].username);
    });
  };
  useEffect(() => {
    GetUser();
  }, []);

  function updateSearch(value) {
    //do your search logic or anything
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/B13.png")}
        style={styles.ImageB}
      >
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

        <Searchbar
          onChangeText={(text) => console.log(text)}
          updateSearch={updateSearch}
          style={{ marginTop: "8%" }}
        />

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
            <TouchableHighlight onPress={this.saveButton}>
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
          <TouchableHighlight onPress={this.saveButton}>
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
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <Acceuil />
    </NativeBaseProvider>
  );
};
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
    flexDirection: "row",
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
    paddingLeft: 20,
    paddingRight: 20,
  },

  buttonDesign3: {
    backgroundColor: "#28B463",
    alignItems: "center",
    borderRadius: 8,
  },
});
