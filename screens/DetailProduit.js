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
import axios from "axios";
import "localstorage-polyfill";

function DetailProduit({ navigation, route }) {
  const Mon_URL = "http://192.168.1.249:4000";

  var Detail = route.params.data;
  const [data, setdata] = useState(Detail);
  const [Role, setRole] = useState(true);
  // setDetail(Detail);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = (id) => {
    console.log("id=>", id);

    setIsEnabled((previousState) => !previousState);
    isEnabled
      ? setdata({
          id: Detail.id,
          nom: Detail.nom,
          etat: "Disponible",
          photo: Detail.photo,
        })
      : setdata({
          id: Detail.id,
          nom: Detail.nom,
          etat: "Indisponible",
          photo: Detail.photo,
        });
    console.log("p=>", data);
    axios.put(Mon_URL + `/produit/${id}`, data).then((response) => {
      console.log("response ===========>", response.config.data);
      axios.get(Mon_URL + "/produit/" + data.nom).then((res) => {
        setdata(res.data[0]);
        console.log(res.data[0],"i'm trying");
      });
    });
  };

  useEffect(() => {
    const Role = JSON.parse(localStorage.getItem("etat"));
    Role === "Pharmacien" ? setRole(false) : setRole(!false);
    console.log(data, "data.id");
  }, [isEnabled]);
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
                  alt="im01"
                  source={{ uri: data.photo }}
                  style={{
                    height: 300,
                    width: 300,
                    border: "1px solid",
                    borderRadius: 400,
                    backgroundColor: "white",
                  }}
                />
              </View>
              <View style={{ marginTop: "10%" }}>
                <Text style={styles.title}>
                  Nom du produit:
                  <Text style={{ fontSize: 15, color: "black" }}>
                    {" " + data.nom}
                  </Text>
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>
                  Disponibilité:
                  <Text style={{ fontSize: 15, color: "black" }}>
                    {" " + data.etat}
                  </Text>
                </Text>
                <View></View>
              </View>
              <View style={styles.Button}>
                <Text
                  style={{
                    marginLeft: "10%",
                    marginTop: "32%",
                    marginBottom: "5%",
                    fontSize: 18,
                    color: "#344372",
                  }}
                >
                  Localiser votre pharmacie
                </Text>
                <TouchableOpacity>
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
            <View style={styles.ImageX}>
              <Image
                alt="im01"
                source={{ uri: data.photo }}
                style={{
                  height: 300,
                  width: 300,
                  border: "1px solid",
                  borderRadius: 400,
                  backgroundColor: "white",
                }}
              />
              <Text style={styles.title1}>Nom du produit:{data.nom}</Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View>
                  {isEnabled && data.etat === "Disponible" ? (
                    <Text style={styles.title}>
                      Disponibilité:
                      <Text style={{ fontSize: 15, color: "#2DA539" }}>
                        {data.etat}
                      </Text>
                    </Text>
                  ) : (
                    <Text style={{ color: "red", fontSize: 15 }}>
                      <Text style={styles.title}> Disponibilité: </Text>
                      {data.etat}
                    </Text>
                  )}
                </View>
                <View>
                  <View>
                    <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={() => toggleSwitch(data.id)}
                      value={isEnabled}
                    />
                  </View>
                </View>
              </View>
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
  title1: {
    marginTop: "15%",
    fontSize: 20,
    fontFamily: "monospace",
    color: "#344372",
  },
  Button: {
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
    marginTop: "10%",
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
    fontFamily: "monospace",
    color: "#344372",
  },
  buttonDesign2: {
    height: 50,
    backgroundColor: "#2DA539",
    fontWeight: "bold",
  },
});
