import React from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import "localstorage-polyfill";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ nom, navigation, etat, photo }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: photo }} style={styles.photo} />

      <Text
        style={styles.title}
        onPress={() => {
          // using navigation to get some data to desplay in DetailProduit
          navigation.navigate("DetailProduit", {
            data: { nom: nom, etat: etat, photo: photo },
          });
        }}
      >
        {nom}
      </Text>
    </View>
  );
};

// the filter
const List = ({ searchPhrase, setClicked, data, navigation }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      console.log("renderItemPHoto", item);
      return (
        <Item
          photo={item.photo}
          etat={item.etat}
          nom={item.nom}
          navigation={navigation}
        />
      );
    }
    // filter of the nom
    if (
      item.nom
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item nom={item.nom} navigation={navigation} />;
    }
    // filter of the etat
    if (
      item.etat
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item nom={item.nom} navigation={navigation} />;
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
    width: "85%",
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f6",
    paddingVertical: 10,
    paddingHorizontal: "7%",
    marginVertical: 4,
    borderRadius: 4,
    borderBottomColor: "lightgrey",
  },
  title: {
    marginLeft: "25%",
    fontSize: 20,
    marginBottom: 5,
    fontStyle: "italic",
  },
});
