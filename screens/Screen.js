import React, {Component,useState,useEffect} from 'react'
import { AppRegistry,SafeAreaView,ScrollView,StatusBar,FlatList,TextInput,ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
//import { useNavigation } from '@react-navigation/native';
//import { TouchableHighlight } from 'react-native-gesture-handler';
//import { createAppContainer } from 'react-navigation';
//import { createDrawerNavigator } from 'react-navigation-Drawer';
//import { Dimensions } from 'react-native';
//import { Feather } from '@expo/vector-icons';




export default class Screen extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             apiData:[],
//             naData :[],
//         }
//         this.dataIdProduit=null;
//         this.Nom = null;
//         this.Etat = null;
        
//     }

    
// // button recherche
// searchButton = () => {
//     fetch(Mon_URL+'/produit/'+(this.dataIdProduit),{
//         method: 'GET'
//     }).then((responseData) => {
//         return responseData.json();
//     }).then((jsonData) => {
//         console.log(jsonData);
//         this.setState({apiData: jsonData})
//        // console.log(this.state.apiData);
//     }).done();
//     this.dataIdProduit = null ;      
// }
render() {    

    const DrawerNavigator({
        ProfileScreen ,
        RechercheScreen,
        AboutScreen,
        ContactScreen ,
        DeconexionScreen,
        });





    const data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData){
            return(
                <View key={jsonData.IdPharmacie}>
                    <View style={{flexDirection:'row'}} >
                        <Text style={{ color:'#0C83FA',marginLeft:50,fontWeight:'bold'}}>{jsonData.IdProduit} - </Text>
                        <Text style={{ color:'#0C83FA',fontWeight:'bold'}}>{jsonData.Nom } - </Text>
                        <Text style={{ color:'#0C83FA',fontWeight:'bold'}}>{jsonData.Etat} - </Text>
                       
                    </View>
                </View>
            )
        })

    const [value,setValue]= useState()    
    return (
             <NativeBaseProvider>
             <ScrollView>
             <View style={styles.container}>

                        
                        <ImageBackground source={require('../assets/img/b13.jpg')}
                            style={styles.ImageB}>
                    
                        <View>
                            <SafeAreaView>
                                <TouchableOpacity
                                style={{ alignItems: "flex-end", margin:16 }}
                                onPress={this.props.navigation.openDrawer}>
                                    <FontAwesome5 name="bars" size={24} color="#161924"/>
                                </TouchableOpacity>
                                <View style={{ flex: 1,alignItems: "center", justifyContent: "center"}}>
                                    <Text style={styles.text}>{this.props.name} Screen </Text>
                                </View>
                            </SafeAreaView>
                        </View>
                      
                       
                        







                        </ImageBackground>            
                </View>
                </ScrollView>
                </NativeBaseProvider>
)}}



const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },

    ImageB:{
        
        height:'100%',
        width:'100%',
           
    },

    ImageX:{
        
        height:'10%',
        alignItems:'center',
       
    },

    checkboxContainer: {
        flexDirection: "row",
        marginTop:40,
        marginLeft:15,
        marginBottom:20
      },

      checkbox: {
        alignSelf: "center",
        
      },
      label1: {
        marginLeft:15,
        marginRight:30,
      },

      label2: {
        marginLeft:15,
      },


    BiText:{
        fontFamily:'monospace',
        color:'#1C6785',
        marginTop:100,
        fontSize:23,
        paddingBottom:20,
        fontWeight:'bold'
    },

    Middle:{
        alignItems:'center',
        justifyContent:'center',
    },

    text2:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:5
    },

    
    logText:{
        fontWeight:'bold',
     },

     
     emailInput:{
        marginTop:10,
        marginRight:5,
     },

     buttonStyle:{
        marginTop:20,
        marginRight:15,
        paddingLeft:40,
        width:'90%',
        elevation:8,
        marginBottom:15,

     },


     buttonStyleX:{
        marginTop:12,
        marginRight:15,
        marginLeft:15,
     },

     
     buttonDesign:{
        backgroundColor:'#75CDC5'
     },

     lineStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        alignItems:'center',
    },
})

AppRegistry.registerComponent('navigation', () => Screen);
