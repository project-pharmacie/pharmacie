import React, { useState } from "react";
import { StyleSheet, View ,Text} from "react-native";
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE ,Marker } from "react-native-maps";

function Localisation(props) {
  const navigation = useNavigation();
  const [value, setValue] = useState();

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

  };

   const Monastir = {
    latitude: 35.764424241790934,
    longitude: 10.822951924055815,
    latitudeDelta: 0.0922,
   longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={Monastir} //your region data goes here.
    >
      {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
      {/* <Marker coordinate={Monastir} /> */}

{/* PharmacieZeinebBelaid */}
    <Marker
    pinColor="green"
    coordinate={{
    latitude: 35.77006385423076,
    longitude: 10.821593385189772,
    }} 
    title={"Pharmacie Zeineb Belaid"}
    description={"Pharmacie de jour"}
  />

{/* PharmacieDenuit */}
  <Marker
    pinColor="green"
    coordinate={{
     latitude: 35.77066069188773,
    longitude: 10.831419322639704,
    }}
    title={"Pharmacie dabebi"}
    description={"Pharmacie de nuit"}

  />
{/* PharmacieSanaGam */}
  <Marker
    pinColor="green"
    coordinate={{
      latitude: 35.769697969314024,
    longitude: 10.838361214846373,
    }} 
    title={"Pharmacie Sana Gam"}
    description={"Pharmacie de jour"}
   
  />

{/* PharmacieZakyaHajjar */}
  <Marker
    pinColor="green"
    coordinate={{
      latitude: 35.76863811770605,
    longitude: 10.835799034684896,
    }}
    title={"Pharmacie zakya Hajjar"}
    description={"Pharmacie de jour"}

/>
    </MapView>
  </View>


); 
}


export default () => {
  return <NativeBaseProvider>
  {<Localisation />}
  </NativeBaseProvider>;
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
