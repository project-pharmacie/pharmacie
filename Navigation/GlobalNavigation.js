import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import SearchBar from "../Shared/SearchBar";
import Pharmacie from "../screens/Pharmacie";
import Produit from "../screens/Produit";
import Acceuil from "../screens/Acceuil";
import Localisation from "../screens/Localisation";
import DetailProduit from "../screens/DetailProduit";
import DetailPharmacie from "../screens/DetailPharmacie";
import List from "../Shared/List";


const Stack = createNativeStackNavigator();
const GlobalNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Acceuil"
        component={Acceuil}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DetailProduit"
        component={DetailProduit}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DetailPharmacie"
        component={DetailPharmacie}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Produit"
        component={Produit}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Pharmacie"
        component={Pharmacie}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Localisation"
        component={Localisation}
      />
    </Stack.Navigator>
  );
};

export default GlobalNavigation;
