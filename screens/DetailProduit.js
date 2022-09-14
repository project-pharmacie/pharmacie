import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NativeBaseProvider, Image, Button } from "native-base";

import "localstorage-polyfill";

function DetailProduit({ navigation, route }) {
  const [isEnabled, setIsEnabled] = useState(true);
  // console.log("route", route.params.data);
  const Detail = route.params.data;
  const [Role, setRole] = useState(true);
  //geting the Role of user and get the seleckted element Detail
  const [detail, setDetail] = useState(null);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const DisponiblitéDarticle = () => {
    Detail.etat === "Disponible" ? setIsEnabled(true) : setIsEnabled(false);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("etat"));
    console.log(detail, "detail");
    setDetail(detail);
    data === "Pharmacien" ? setRole(false) : setRole(!false);
    console.log(Detail.photo, "photo");
    DisponiblitéDarticle();
  }, []);
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../assets/img/B13.png")}
        style={styles.container}
      >
        <View style={styles.container}>
          {Role ? (
            <View style={styles.container}>
              <View style={styles.ImageX}>
                <Image
                  source={{ uri: Detail.photo }}
                  style={{
                    height: 450,
                    width: 460,
                    border: "1px solid",
                    borderRadius: 35,
                    backgroundColor: "white",
                  }}
                />
              </View>
              <View style={{ marginTop: "2%" }}>
                <Text style={styles.title}>
                  Nom du produit : {Detail && Detail.nom}
                </Text>
              </View>
              <View>
                <Text style={styles.title}>
                  Etat de la disponibilité : {Detail && Detail.etat}
                </Text>
                <View></View>
              </View>
              <View style={styles.Button}>
                <Text style={{ marginLeft:"10%", marginTop: "10%", fontSize: 20 }}>
                  Trouver votre medicaments ici :
                </Text>
                <TouchableOpacity >
                  <Button
                    style={styles.buttonDesign2}
                    onPress={() => navigation.navigate("Pharmacie")}
                  >
                    Localisation
                  </Button>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={{ alignItems: "center" }}>
              <Image
                source={{ uri: Detail.photo }}
                style={{
                  height: 450,
                  width: 460,
                  border: "1px solid",
                  borderRadius: 35,
                  backgroundColor: "white",
                }}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View>
                  {isEnabled ? (
                    <Text style={styles.title}>
                      etat : {Detail && Detail.etat + "  "}
                    </Text>
                  ) : (
                    <Text style={{ color: "red", fontSize: 24 }}>
                      <Text style={styles.title}> etat : </Text>indisponible
                    </Text>
                  )}
                </View>
                <View>
                  <Switch
                    rackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                    onValueChange={() => toggleSwitch()}
                    value={isEnabled}
                  />
                </View>
              </View>
              <Text style={styles.title}>nom : {Detail && Detail.nom}</Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

export default DetailProduit;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  Button: {
    marginTop: "10%",
    marginBottom: 50,
    marginRight: 20,
    paddingLeft: 40,
    width: "90%",
    elevation: 10,
  },
  ImageB: {
    width: "100%",
    height: "100%",
  },

  ImageX: {
    //height:'10%',
    marginTop: "2%",
    alignItems: "center",
  },
  BiText: {
    fontFamily: "monospace",
    color: "#344372",
    paddingBottom: 20,
    fontSize: 14,
  },
  Bi1Text: {
    fontFamily: "monospace",
    color: "#344372",
    fontSize: 14,
  },
  list__container: {
    margin: 10,
    height: "45%",
    width: "100%",
  },
  item: {
    alignItems: "center",
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontStyle: "italic",
    color: "black",
  },
  buttonDesign2: {
    height: 50,
    backgroundColor: "#2DA539",
    fontWeight: "bold",
  },
});
