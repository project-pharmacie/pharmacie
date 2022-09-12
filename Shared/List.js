import React, { useState, setState, useEffect } from "react";

import { StyleSheet, Text, View, FlatList, SafeAreaView ,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import "localstorage-polyfill";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ nom, Navigation,etat }) => {
  const [clickedProduit , setClickedProduit] = useState(Object);

  return (
    <View style={styles.item}>
      <Text
        style={styles.title}
        onPress={() => {
          
            Navigation.navigate("DetailProduit"),
            setClickedProduit(nom, etat)
            console.log(setClickedProduit({nom: nom , etat: etat}))
        }}
      >
        {nom}
      </Text>
    </View>
  );
};

// the filter
const List = ({ searchPhrase, setClicked, data, setClickedProduit }) => {
  const Navigation = useNavigation();

  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return (
        <Item
          etat={item.etat}
          nom={item.nom}
          Navigation={Navigation}
          setClickedProduit={setClickedProduit}
        />
      );
    }
    // filter of the nom
    if (
      item.nom
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
          nom={item.nom}
          Navigation={Navigation}
          setClickedProduit={setClickedProduit}
        />
      );
    }
    // filter of the description
    if (
      item.etat
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
          nom={item.nom}
          Navigation={Navigation}
          setClickedProduit={setClickedProduit}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;
const styles = StyleSheet.create({
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
  },
});
