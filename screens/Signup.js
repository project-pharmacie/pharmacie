import { useState, React, useEffect } from "react";

import {
  AppRegistry,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Picker,
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  ScrollView,
} from "native-base";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
const Mon_URL = "http://192.168.1.177:4000";

export default Signup = ({ navigation }) => {
  const [id, setid] = useState(String);
  const [username, setusername] = useState(String);
  const [email, setemail] = useState(String);
  const [password, setpassword] = useState(String);
  const [adress, setadress] = useState(String);
  const [role, setrole] = useState(String);
  const [naData, setnaData] = useState([]);
  const [pharmacieList, setPharmacieList] = useState();
  const [pharmacieName, setPharmaciename] = useState();
  // button Enregistrer
  const getpharmacieList = () => {
    axios.get(Mon_URL + "/pharmacie/").then((res) => {
      let data = res.data;
      setPharmacieList(data);
      console.log(pharmacieList, "pharmacie ====>");
    });
  };

  const saveButton = () => {
    fetch(Mon_URL + "/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        adress: adress,
        role: role,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((jsonData) => {
        setnaData(jsonData);
        console.log("jsonData", jsonData);
        Alert.alert("Inscription réussie ! Veuillez se connecter !");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("error", error);
        Alert.alert("veuillez remplir les champs de formulaire !!");
      });
    setid(null);
    setusername(null);
    setemail(null);
    setpassword(null);
    setadress(null);
    setrole(null);
  };
  useEffect(() => {
    getpharmacieList();
    console.log(pharmacieList, "RNPickerSelect");
  }, []);

  return (
    <ImageBackground
      source={require("../assets/img/B13.png")}
      style={styles.ImageB}
    >
      <NativeBaseProvider>
        <ScrollView>
          <View style={styles.container}>
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
                        color: "black",
                      }}
                      _dark={{
                        color: "gray.300",
                      }}
                    />
                  }
                  variant="rounded"
                  placeholder="Nom"
                  onChangeText={(text) => {
                    setusername(text);
                  }}
                  value={username}
                  _light={{
                    placeholderTextColor: "blueGray.400",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
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
                        color: "black",
                      }}
                      _dark={{
                        color: "gray.300",
                      }}
                    />
                  }
                  variant="rounded"
                  placeholder="Email"
                  onChangeText={(text) => {
                    setemail(text);
                  }}
                  value={email}
                  _light={{
                    placeholderTextColor: "blueGray.400",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
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
                        color: "black",
                      }}
                      _dark={{
                        color: "gray.300",
                      }}
                    />
                  }
                  variant="rounded"
                  placeholder="Adresse"
                  onChangeText={(text) => {
                    setadress(text);
                  }}
                  value={adress}
                  _light={{
                    placeholderTextColor: "blueGray.400",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
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
                        color: "black",
                      }}
                      _dark={{
                        color: "gray.300",
                      }}
                    />
                  }
                  variant="rounded"
                  secureTextEntry={true}
                  placeholder="Mot de passe"
                  onChangeText={(text) => {
                    setpassword(text);
                  }}
                  value={password}
                  _light={{
                    placeholderTextColor: "blueGray.400",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
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
                        color: "black",
                      }}
                      _dark={{
                        color: "gray.300",
                      }}
                    />
                  }
                  variant="rounded"
                  secureTextEntry={true}
                  placeholder="Confirmation Mot de passe"
                  _light={{
                    placeholderTextColor: "blueGray.400",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}
                />
              </View>
            </View>
            <View style={styles.Bi3Text}>
              <Text> *Profile : Patient ou Pharmacien</Text>
            </View>

            {/* Role */}

            <View style={styles.buttonStyleX}>
              <View style={styles.emailInput}>
                <RNPickerSelect
                  onValueChange={(value) => setrole(value)}
                  placeholder={{
                    label: "Select your Role",
                    value: null,
                  }}
                  _light={{
                    placeholderTextColor: "blueGray.400",
                  }}
                  items={[
                    { label: "Patient", value: "Patient" },
                    { label: "Pharmacien", value: "Pharmacien" },
                  ]}
                />
              </View>
              {role == "Pharmacien" && (
                <View style={styles.emailInput}>
                  <RNPickerSelect
                    onValueChange={(value) => setPharmaciename(value)}
                    placeholder={{
                      label: "Select your pharmacie",
                      value: null,
                    }}
                    _light={{
                      placeholderTextColor: "blueGray.400",
                    }}
                    items={pharmacieList.map((el) => ({
                      label: el.username,
                      value: el.username,
                    }))}
                  />
                </View>
              )}

              {/*Button Enregistrer*/}
            </View>
            <View style={styles.buttonStyle}>
              <TouchableHighlight onPress={saveButton}>
                <Button style={styles.buttonDesign}> S'INSCRIRE</Button>
              </TouchableHighlight>
            </View>

            {/*Signup*/}

            <View style={styles.text2}>
              <Text>Vous avez un compte ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.logText}> SE CONNECTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </NativeBaseProvider>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  checkT: {
    paddingTop: 16,
    fontFamily: "monospace",
  },
  check: {
    flexDirection: "row",
  },

  check1: {
    backgroundColor: "transparent",
  },

  ImageB: {
    height: "100%",
    width: "100%",
  },

  ImageX: {
    height: "10%",
    alignItems: "center",
  },

  BiText: {
    fontFamily: "monospace",
    color: "#344372",
    marginTop: 30,
    fontSize: 40,
  },
  Bi1Text: {
    fontFamily: "monospace",
    fontSize: 10,
    marginLeft: 40,
  },

  Bi2Text: {
    alignItems: "center",
    paddingTop: 20,
    fontFamily: "monospace",
    fontSize: 14,
    marginRight: 180,
  },

  Bi3Text: {
    alignItems: "center",
    paddingTop: 10,
    fontFamily: "monospace",
    fontSize: 20,
    // marginRight:180,
  },

  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },

  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 10,
  },

  logText: {
    fontWeight: "bold",
  },

  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },

  buttonStyle: {
    marginTop: 20,
    marginRight: 15,
    paddingLeft: 40,
    width: "90%",
    elevation: 8,
    marginBottom: 15,
  },

  buttonStyleX: {
    marginRight: 15,
    marginLeft: 15,
  },

  buttonDesign: {
    backgroundColor: "#2DA539",
  },

  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    alignItems: "center",
  },
});

AppRegistry.registerComponent("navigation", () => Signup);
