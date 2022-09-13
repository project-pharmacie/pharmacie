import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { NativeBaseProvider, Image } from "native-base";

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
    // const detail =  JSON.parse(localStorage.getItem("Detail"));
    console.log(detail, "detail");
    setDetail(detail);
    data === "Pharmacien" ? setRole(false) : setRole(!false);
    console.log(Detail.photo, "photo");
    DisponiblitéDarticle();
  }, []);
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {Role ? (
          <View style={styles.container}>
            <View style={styles.ImageX}>
              <Image
                source={require("../assets/img/inot1.png")}
                alt=" ImageProduit"
              />
            </View>
            <View>
              <Text style={styles.title}>
                Nom du produit : {Detail && Detail.nom}{" "}
              </Text>
            </View>
            <View>
              <Text style={styles.title}>
                Etat de la disponibilité : {Detail && Detail.etat}
              </Text>
              <View></View>
            </View>
          </View>
        ) : (
          <View>
          <Image source={{src:Detail.photo}} style={{height:450 , width:400}}/>
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
                    {" "}
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

            <Text>nom : {Detail && Detail.nom}</Text>
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
}
// export default () => {
//   return (
//     <NativeBaseProvider>
//       <DetailProduit />
//     </NativeBaseProvider>
//   );
// };
export default DetailProduit;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },

  ImageX: {
    //height:'10%',
    alignItems: "center",
    padding: 20,
    //height:'20%'
    paddingBottom: 20,
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
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
    color: "black",
  },
});
