import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, View, SafeAreaView, ImageBackground } from "react-native";
import DetailPharmacie from "./DetailPharmacie";
import ListPharmacie from "../Shared/ListPharmacie";
import SearchBar from "../Shared/SearchBar";
import { NativeBaseProvider, Image } from "native-base";

const Mon_URL = "http://192.168.1.177:4000";

function Pharmacie({ navigation }) {
  const [data, setdata] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    axios.get(Mon_URL + "/pharmacie/").then((res) => {
      let data = res.data;
      console.log("pharmacie ====>", data);
      setdata(data);
    });
  }, []);
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../assets/img/B13.png")}
        style={styles.ImageB}
      >
        <View style={styles.container}>
          <View
            style={{
              height: "20%",
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <SafeAreaView style={styles.root}>
              <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
                style={{ marginTop: "18%" }}
              />
              <View style={styles.ImageX}>
                <Image
                  source={require("../assets/img/listegreen.png")}
                  alt=" ImagePharmacie"
                />
                <View>
                  <Image
                    style={{ marginRight: "1%", marginLeft: "15%" }}
                    source={require("../assets/img/blocgreen.png")}
                    alt=" ImagePharmacie"
                  />
                </View>
              </View>
              <View style={styles.container}>
                <ListPharmacie
                  searchPhrase={searchPhrase}
                  data={data}
                  setClicked={setClicked}
                  navigation={navigation}
                />
              </View>
            </SafeAreaView>
          </View>
          <View style={styles.flatList}></View>

          <View style={styles.lineStyle}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#F8F8F8" }} />
          </View>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
export default Pharmacie;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    height: "200%",
    width: "100%",
  },
  ImageB: {
    height: "100%",
    width: "100%",
  },

  flatList: {
    // justifyContent: "space-between",
    paddingBottom: 20,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },

  text: {
    fontSize: 20,
    color: "#101010",
    marginTop: 60,
    fontWeight: "700",
  },

  ImageX: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifycontent: "space-evenly",
  },
  root: {
    alignContent: "space-between",
    alignItems: "flex-end",
    gap: "5%",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },

  listItem: {
    marginTop: "8%",
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
    borderRadius: 15,
  },

  listItemText: {
    fontSize: 14,
  },

  lineStyle: {
    flexDirection: "row",
    marginBottom: 20,
    // marginTop:80,
    // marginLeft:15,
    // marginRight:15,
    alignItems: "center",
  },
});
