import React, { Component } from "react";
import {
  AppRegistry,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
  Checkbox,
  ScrollView
} from "native-base";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";

const Mon_URL = "http://192.168.25.13:4000";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      naData: []
    };
    this.id = null;
    this.username = null;
    this.email = null;
    this.password = null;
    this.adress = null;
    this.role = null;
  }

  // button Enregistrer

  saveButton = () => {

      fetch(Mon_URL + "/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
          adress: this.adress,
          role: this.role
        })
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((jsonData) => {
        this.setState({ naData: jsonData });
        console.log("jsonData", jsonData);
        Alert.alert(
          "Inscription réussie ! Veuillez se connecter !" 
            
        );
      })
      .catch((error) => {
        console.log("error", error);
        Alert.alert("veuillez remplir les champs de formulaire !!");
      });
    this.id = null;
    this.username = null;
    this.email = null;
    this.password = null;
    this.adress = null;
    this.role = null;
  };

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground
              source={require("../assets/img/B13.png")}
              style={styles.ImageB}
            >
              <View style={styles.Middle}>
                <Text style={styles.BiText}>PHARMA</Text>
                <Text style={styles.Bi1Text}>mobile</Text>
                <Text style={styles.Bi2Text}>Crèer votre compte</Text>
              </View>

              {/* UserName*/}

              <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                  <Input
                    InputLeftElement={
                      <Icon
                        as={<FontAwesome5 name="user-secret" />}
                        size="xs"
                        m={2}
                        _light={{
                          color: "black"
                        }}
                        _dark={{
                          color: "gray.300"
                        }}
                      />
                    }
                    variant="rounded"
                    placeholder="Nom"
                    onChangeText={(text) => {
                      this.username = text;
                    }}
                    value={this.username}
                    _light={{
                      placeholderTextColor: "blueGray.400"
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50"
                    }}
                  />
                </View>
              </View>

              {/* Email*/}

              <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                  <Input
                    InputLeftElement={
                      <Icon
                        as={<MaterialCommunityIcons name="email" />}
                        size="xs"
                        m={2}
                        _light={{
                          color: "black"
                        }}
                        _dark={{
                          color: "gray.300"
                        }}
                      />
                    }
                    variant="rounded"
                    placeholder="Email"
                    onChangeText={(text) => {
                      this.email = text;
                    }}
                    value={this.email}
                    _light={{
                      placeholderTextColor: "blueGray.400"
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50"
                    }}
                  />
                </View>
              </View>

              {/* Address*/}

              <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                  <Input
                    InputLeftElement={
                      <Icon
                        as={<FontAwesome name="address-book" />}
                        size="xs"
                        m={2}
                        _light={{
                          color: "black"
                        }}
                        _dark={{
                          color: "gray.300"
                        }}
                      />
                    }
                    variant="rounded"
                    placeholder="Adresse"
                    onChangeText={(text) => {
                      this.adress = text;
                    }}
                    value={this.adress}
                    _light={{
                      placeholderTextColor: "blueGray.400"
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50"
                    }}
                  />
                </View>
              </View>

              {/* Password*/}

              <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                  <Input
                    InputLeftElement={
                      <Icon
                        as={<FontAwesome5 name="key" />}
                        size="xs"
                        m={2}
                        _light={{
                          color: "black"
                        }}
                        _dark={{
                          color: "gray.300"
                        }}
                      />
                    }
                    variant="rounded"
                    secureTextEntry={true}
                    placeholder="Mot de passe"
                    onChangeText={(text) => {
                      this.password = text;
                    }}
                    value={this.password}
                    _light={{
                      placeholderTextColor: "blueGray.400"
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50"
                    }}
                  />
                </View>
              </View>

              {/* Password Confirmation */}

              <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                  <Input
                    InputLeftElement={
                      <Icon
                        as={<FontAwesome5 name="key" />}
                        size="xs"
                        m={2}
                        _light={{
                          color: "black"
                        }}
                        _dark={{
                          color: "gray.300"
                        }}
                      />
                    }
                    variant="rounded"
                    secureTextEntry={true}
                    placeholder="Confirmation Mot de passe"
                    _light={{
                      placeholderTextColor: "blueGray.400"
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50"
                    }}
                  />
                </View>
              </View>

              <Text style={styles.Bi3Text}> *Role:Patient ou Pharmacien</Text>

              {/* Role */}

              <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                  <Input
                    InputLeftElement={
                      <Icon
                        as={<FontAwesome5 name="user-secret" />}
                        size="xs"
                        m={2}
                        _light={{
                          color: "black"
                        }}
                        _dark={{
                          color: "gray.300"
                        }}
                      />
                    }
                    variant="rounded"
                    secureTextEntry={false}
                    placeholder="Choisissez votre role"
                    onChangeText={(text) => {
                      this.role = text;
                    }}
                    value={this.role}
                    _light={{
                      placeholderTextColor: "blueGray.400"
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50"
                    }}
                  />
                </View>
              </View>

              {/*Button Enregistrer*/}
              <View style={styles.buttonStyle}>
                <TouchableHighlight onPress={this.saveButton}>
                  <Button style={styles.buttonDesign}> S'INSCRIRE</Button>
                </TouchableHighlight>
              </View>

              {/*Signup*/}

              <View style={styles.text2}>
                <Text>Vous avez un compte ? </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={styles.logText}> SE CONNECTER</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  checkT: {
    paddingTop: 16,
    fontFamily: "monospace"
  },
  check: {
    flexDirection: "row"
  },

  check1: {
    backgroundColor: "transparent"
  },

  ImageB: {
    height: "100%",
    width: "100%"
  },

  ImageX: {
    height: "10%",
    alignItems: "center"
  },

  BiText: {
    fontFamily: "monospace",
    color: "#344372",
    marginTop: 30,
    fontSize: 40
  },
  Bi1Text: {
    fontFamily: "monospace",
    fontSize: 10,
    marginLeft: 40
  },

  Bi2Text: {
    paddingTop: 20,
    fontFamily: "monospace",
    fontSize: 14,
    marginRight: 180
  },

  Bi3Text: {
    paddingTop: 10,
    fontFamily: "monospace",
    fontSize: 10
    // marginRight:180,
  },

  Middle: {
    alignItems: "center",
    justifyContent: "center"
  },

  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 10
  },

  logText: {
    fontWeight: "bold"
  },

  emailInput: {
    marginTop: 10,
    marginRight: 5
  },

  buttonStyle: {
    marginTop: 20,
    marginRight: 15,
    paddingLeft: 40,
    width: "90%",
    elevation: 8,
    marginBottom: 15
  },

  buttonStyleX: {
    marginRight: 15,
    marginLeft: 15
  },

  buttonDesign: {
    backgroundColor: "#2DA539"
  },

  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    alignItems: "center"
  }
});

AppRegistry.registerComponent("navigation", () => Signup);
