import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { Snackbar } from "react-native-paper";
const PharmacieZakyaHajjar = {
  latitude: 35.76863811770605,
  longitude: 10.835799034684896,
};

const PharmacieSanaGam = {
  latitude: 35.769697969314024,
  longitude: 10.838361214846373,
};
const PharmacieDabebi = {
  latitude: 35.77066069188773,
  longitude: 10.831419322639704,
};
const PharmacieZeinebBelaid = {
  latitude: 35.77006385423076,
  longitude: 10.821593385189772,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

const Monastir = {
  latitude: 35.764424241790934,
  longitude: 10.822951924055815,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const reviewsList = [
  {
    id: "1",
    image: "e",
    name: "Emilli Williamson",
    date: "20 Feb, 2021",
    review: "Best Services.",
    rating: 5,
  },
  {
    id: "2",
    image: "e",
    name: "Emilli Williamson",
    date: "20 Feb, 2021",
    review: "Best Services.",
    rating: 5,
  },
  {
    id: "3",
    image: "e",
    name: "John Smith",
    date: "19 Feb, 2021",
    review: "Its really good car service center.",
    rating: 4,
  },
  {
    id: "4",
    image: "e",
    name: "David Johnson",
    date: "15 Feb, 2021",
    review: "Decent service.",
    rating: 3,
  },
];

const servicesList = [
  {
    id: "1",
    service: "Body Wash",
    amount: 50,
    icon: "directions-car",
    isSelected: true,
  },
  {
    id: "2",
    service: "Interior Cleaning",
    amount: 80,
    icon: "airline-seat-recline-extra",
    isSelected: false,
  },
  {
    id: "3",
    service: "Engine Detailing",
    amount: 90,
    icon: "dashboard",
    isSelected: false,
  },
  {
    id: "4",
    service: "Light Service",
    amount: 70,
    icon: "highlight",
    isSelected: false,
  },
];

const DetailPharmacie = ({ navigation, route }) => {
  //   const item = route.params.marker;
  const [state, setState] = useState({
    currentInfoIndex: 1,
    servicesData: servicesList,
    showSnackBar: false,
    isFavorite: false,
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const { currentInfoIndex, servicesData, showSnackBar, isFavorite } = state;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />

      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name={isFavorite ? "favorite" : "favorite-border"}
          size={24}
          onPress={() =>
            updateState({ showSnackBar: true, isFavorite: !isFavorite })
          }
        />

        <Image
          source={require("../assets/img/direction.png")}
          style={{ width: 20.0, height: 20.0 }}
        />
        <MaterialIcons name="phone" size={24} />
      </TouchableOpacity>
      <View>
        {PhotoDePharmacie()}
        {servicesAboutAndReviewsInfo()}

        {currentInfoIndex == 1 ? (
          <>
            {locationInfo()}
            {aboutInfo()}
            {openingHoursInfo()}
          </>
        ) : null}

        {currentInfoIndex == 3 ? <>{reviews()}</> : null}
      </View>
      {currentInfoIndex == 1 ? <></> : null}
      <Snackbar
        style={{
          ...styles.snackBarStyle,
          bottom: currentInfoIndex == 1 ? 40.0 : -10.0,
        }}
        visible={showSnackBar}
        onDismiss={() => updateState({ showSnackBar: false })}
      >
        {isFavorite ? "Added to favorite" : "Remove from favorite"}
      </Snackbar>
    </SafeAreaView>
  );

  function reviews() {
    return (
      <View>
        {reviewsList.map((item) => (
          <View key={`${item.id}`}>
            <View style={styles.reviewsWrapStyle}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 40.0, height: 40.0, borderRadius: 20.0 }}
                  />
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.date}</Text>
                  </View>
                </View>
                {showRating({ number: item.rating })}
              </View>
              <Text>{item.review}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }

  function showRating({ number }) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {number == 5.0 ||
        number == 4.0 ||
        number == 3.0 ||
        number == 2.0 ||
        number == 1.0 ? (
          <MaterialIcons name="star" size={16} />
        ) : null}
        {number == 5.0 || number == 4.0 || number == 3.0 || number == 2.0 ? (
          <MaterialIcons name="star" size={16} />
        ) : null}
        {number == 5.0 || number == 4.0 || number == 3.0 ? (
          <MaterialIcons name="star" size={16} />
        ) : null}
        {number == 5.0 || number == 4.0 ? (
          <MaterialIcons name="star" size={16} />
        ) : null}
        {number == 5.0 ? <MaterialIcons name="star" size={16} /> : null}
      </View>
    );
  }

  function locationInfo() {
    return (
      <View>
        <Text>Location</Text>
        <View style={styles.mapStyle}>
          <MapView
            style={{ height: 191 }}
            initialRegion={PharmacieZeinebBelaid}
          >
            <Marker coordinate={PharmacieDabebi}>
              <Image
                source={require("../assets/img/custom_marker.png")}
                style={{ width: 30.0, height: 30.0 }}
              />
            </Marker>
          </MapView>
        </View>
      </View>
    );
  }

  function aboutInfo() {
    return (
      <View>
        <Text>About</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pharetra
          luctus turpis quis senectus vitae dis nisl porttitor. Et id venenatis,
          potenti sapien purus aliquam est. Tellus ut tincidunt id mi cum.
          Bibendum vestibulum blandit semper aenean egestas nunc dignissim id.
        </Text>
      </View>
    );
  }

  function openingHoursInfo() {
    return (
      <View>
        <Text>Opening Hours</Text>
        <Text>Open now (09:00 AM - 22:00 PM)</Text>
      </View>
    );
  }
  function PhotoDePharmacie() {
    const Pharmacie = route.params.pharmacieData;

    const photo = Pharmacie.photo;
    return (
      <View style={styles.photo}>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
    );
  }

  function servicesAboutAndReviewsInfo() {
    return (
      <View>
        <View style={{ height: 1.0 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {servicesAboutAndReviews({ title: "Services", index: 1 })}
          <View style={{ height: 35.0, width: 1.0 }} />
          {servicesAboutAndReviews({ title: "About", index: 2 })}
          <View style={{ height: 35.0, width: 1.0 }} />
          {servicesAboutAndReviews({ title: "Reviews", index: 3 })}
        </View>
        <View style={{ height: 1.0 }} />
      </View>
    );
  }

  function servicesAboutAndReviews({ title, index }) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => updateState({ currentInfoIndex: index })}
        style={{
          flex: 1,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  servicesWrapStyle: {
    elevation: 3.0,
    borderColor: "#D7D7D7",
    borderWidth: 1.0,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    backgroundColor: "red",
    height: 300,
    width: "100%",
  },
  servicesIconWrapStyle: {
    width: 60.0,
    height: 60.0,
    borderRadius: 30.0,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.0,
  },

  checkIconWrapStyle: {
    position: "absolute",
    top: 5.0,
    right: 10.0,
    width: 20.0,
    height: 20.0,
    borderRadius: 10.0,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    overflow: "hidden",
    elevation: 3.0,
    borderColor: "#D7D7D7",
    borderWidth: 1.0,
  },
  openingHoursInfoWrapStyle: {},
  reviewsWrapStyle: {
    borderColor: "#D7D7D7",
    borderWidth: 1.0,
    elevation: 3.0,
  },
  snackBarStyle: {
    position: "absolute",
    left: -10.0,
    right: -10.0,
    backgroundColor: "#333333",
    elevation: 0.0,
  },
});

export default DetailPharmacie;
