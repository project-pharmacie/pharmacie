import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Admin from "../screens/Admin";
import AdminPh from "../screens/AdminPh";
import AdminPa from "../screens/AdminPa";
import AdminPr from "../screens/AdminPr";
import SearchBar from '../Shared/SearchBar';
import Pharmacie from "../screens/Pharmacie";
import Produit from "../screens/Produit";
import Acceuil from '../screens/Acceuil';
import Localisation from '../screens/Localisation';
import DetailProduit from '../screens/DetailProduit';
import DetailPharmacie from '../screens/DetailPharmacie';
import List from '../Shared/List';

const AboutScreen = (props) => <View><Text></Text></View>
const AboutScreenAdmin = (props) => <View><Text></Text></View>
const  Stack  =createStackNavigator () 
const GlobalNavigation =(props) =>{
    return (
        <Stack.Navigator>
                      
            <Stack.Screen  options={{headerShown: false}} name='Login' component={Login}/>
            <Stack.Screen  options={{headerShown: false}} name='Signup' component={Signup}/> 
            <Stack.Screen  options={{headerShown: false}} name='Acceuil' component={Acceuil}/> 
            <Stack.Screen  options={{headerShown: false}} name='DetailProduit' component={DetailProduit}/> 
            <Stack.Screen  options={{headerShown: false}} name='DetailPharmacie' component={DetailPharmacie}/> 
            <Stack.Screen options={{headerShown: false}} name='Produit' component={Produit}/>
            <Stack.Screen options={{headerShown: false}} name='Pharmacie' component={Pharmacie}/>
             <Stack.Screen  options={{headerShown: false}} name='Localisation' component={Localisation}/> 
            <Stack.Screen  options={{headerShown: false}} name='Admin' component={Admin}/>
            <Stack.Screen  options={{headerShown: false}} name='AdminPr' component={AdminPr}/>
            <Stack.Screen  options={{headerShown: false}} name='AdminPa' component={AdminPa}/>
            <Stack.Screen  options={{headerShown: false}} name='AdminPh' component={AdminPh}/>         
                       
     </Stack.Navigator>
    )
}

export default GlobalNavigation;
