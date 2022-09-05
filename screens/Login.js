import React, { Component ,} from "react";
import {
  AppRegistry,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio
} from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Mon_URL = "http://192.168.1.29:4000";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:"",
      apiData: [],
      naData: []
    };
    this.username = null;
    this.password = null;
  }
 

  // Boutton Connexion

  saveButton = () => {
    fetch(Mon_URL + "/user/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify({
        username: this.username,
        password: this.password
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((jsonData) => {
        console.log(jsonData);
        
        this.props.navigation.navigate("Acceuil");
      })
      .catch(() => {
        this.setState({error:"veuillez saisir votre identifiant"});});
    this.username = null;
    this.password = null;
  };

  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/img/B13.png")}
            style={styles.ImageB}
          >
            <View style={styles.ImageX}>
              <Image
                source={require("../assets/img/logo.png")}
                alt=" ImagePharmacie"
              />
            </View>

            <View style={styles.Middle}>
              <Text style={styles.BiText}>PHARMA</Text>
            </View>
            <View style={styles.Middle}>
              <Text style={styles.Bi1Text}>mobile</Text>
            </View>

            {/* Username or Email Input field */}

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
                        color: "blueGray.400"
                      }}
                    />
                  }
                  variant="rounded"
                  placeholder="login"
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

            {/* Password Input field */}

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
                        color: "grey.300"
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

            {/*Button connexion */}

            <View style={styles.buttonStyle}>
              <TouchableHighlight onPress={this.saveButton}>
              <View>
              <Button style={styles.buttonDesign}> CONNEXION</Button>
              <Text style={styles.error}>{this.state.error}</Text>
              </View>
               
              </TouchableHighlight>

              
            </View>

            {/*Signup*/}

            <View style={styles.text1}>
              <Text>Vous n'avez pas un compte ? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Signup")}
              >
                <Text style={styles.signupText}> S'INSCRIRE </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  error: {
    color: 'red',
    alignSelf: 'center',
},

  ImageB: {
    height: "100%",
    width: "100%"
  },

  ImageX: {
    height: "25%",
    alignItems: "center"
  },

  BiText: {
    fontFamily: "monospace",
    color: "#344372",
    marginTop: 120,
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 90
  },
  Bi1Text: {
    fontFamily: "monospace",
    fontSize: 10,
    marginLeft: 90
  },

  Middle: {
    alignItems: "center",
    justifyContent: "center"
  },

  text1: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30
  },

  signupText: {
    fontWeight: "bold"
  },

  emailInput: {
    marginTop: 10,
    marginRight: 5
  },

  buttonStyle: {
    marginTop: 30,
    marginRight: 15,
    paddingLeft: 40,
    width: "90%",
    elevation: 8
  },

  buttonStyleX: {
    marginTop: 12,
    marginRight: 15,
    marginLeft: 15
  },

  buttonDesign: {
    backgroundColor: "#2DA539"
  }
});

AppRegistry.registerComponent("navigation", () => Login);
