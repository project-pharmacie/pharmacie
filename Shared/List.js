import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ nom, etat }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nom}</Text>
    <Text style={styles.etat}>{etat}</Text>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
 
  const renderItem = ({ item }) => {
    // when no input, show all
    console.log(
      item.nom
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    );
    if (searchPhrase === "") {
      return <Item nom={item.nom} etat={item.etat} />;
    }
    // filter of the nom
    if (
      item.nom
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item nom={item.nom} etat={item.etat} />;
    }
    // filter of the description
    if (
      item.etat
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item nom={item.nom} etat={item.etat} />;
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
    height: "85%",
    width: "100%",
  },
  item: {
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
