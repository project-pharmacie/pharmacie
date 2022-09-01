import React, { Component } from 'react';
import {AppRegistry, ImageBackground, View, Text, TouchableOpacity,BaseNavigationContainer, StyleSheet } from 'react-native';
import { Input,NativeBaseProvider, Button, Icon, Image, ScrollView }from 'native-base';
import { FontAwesome5,FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Mon_URL= "http://192.168.1.120:6567";

export default class AdminPa extends Component{
    constructor(props){
        super(props)
        this.state = {
            apiData:[],
            naData :[],
        }
        this.dataIdPatient=null;
        this.Nom = null;
        this.Email = null;
        this.MotdePasse = null;
        
    }



// button recherche
searchButton = () => {
    fetch(Mon_URL+'/patient/'+(this.dataIdPatient),{
        method: 'GET'
    }).then((responseData) => {
        return responseData.json();
    }).then((jsonData) => {
        console.log(jsonData);
        this.setState({apiData: jsonData})
       // console.log(this.state.apiData);
    }).done();
    this.dataIdPatient = null ;      
}



 // button Supprimer
    deleteButton = () => {
        fetch(Mon_URL+'/patient/'+(this.dataIdPatient),{
            method: 'DELETE'
        }).then((responseData) => {
            console.log(responseData.rows)
        }).done();
        this.dataIdPatient = null;      
    }

    //button Modifier
    updateButton = () => {
        fetch(Mon_URL+'/patient',{
            method: 'PUT',
            headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
            body: JSON.stringify({IdPatient: this.dataIdPatient,Nom: this.Nom, Email: this.Email})
        }).then((responseData) => {
            return responseData.json();
        }).done();
        this.dataIdPatient=null;
        this.Nom = null;
        this.Email = null;
        
    }


    render() {
        const data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData){
            return(
                <View key={jsonData.IdPatient}>
                    <View style={{flexDirection:'row'}} >
                        <Text style={{ color:'#0C83FA',marginLeft:50,fontWeight:'bold'}}>{jsonData.IdPatient} - </Text>
                        <Text style={{ color:'#0C83FA',fontWeight:'bold'}}>{jsonData.Nom } - </Text>
                        <Text style={{ color:'#0C83FA',fontWeight:'bold'}}>{jsonData.Email}</Text>
                    </View>
                </View>
            )

        })
        return (
            <NativeBaseProvider>
            <ScrollView>
            <View style={styles.container}>
        
                     {/* background Image*/}
                    <ImageBackground source={require('../assets/img/B13.png')}
                         style={styles.ImageB}>
                   
                     {/* Logo Image*/}
                    <View style={styles.ImageX}>
                    <Image source={require('../assets/img/i2.png')} alt=" ImagePharmacie"/>
                    </View>
                   
                      {/* Titre*/}
                      <View style={styles.Middle}>
                      <Text style={styles.BiText}>Bienvenue Sur Pharma</Text>
                      </View>
        
                     {/* ID*/}
                    <View style={styles.buttonStyleX}>
                    <View style={styles.input}>
                     <Input
                         InputLeftElement={
                             <Icon
                                  as={<FontAwesome5 name="user-secret"/>}
                           size="xs"
                               m={2}
                           _light={{
                            color:'black',
                            }}
                          _dark={{
                            color:"gray.300",
                            }}
                            />
                             }
                            variant = "rounded"
                            placeholder =  "ID"
                            onChangeText={(text)=> {this.dataIdPatient = text}}
                            value = {this.dataIdPatient}
                            _light={{
                            placeholderTextColor:"blueGray.400",
        
                            }}
                             _dark={{
                             placeholderTextColor:"blueGray.50",
        
                             }}
                        />
                            </View>
                        </View>
        
                {/* UserName*/}
                
                <View style={styles.buttonStyleX}>
                    <View style={styles.input}>
                     <Input
                         InputLeftElement={
                             <Icon
                                  as={<FontAwesome5 name="user-secret"/>}
                           size="xs"
                               m={2}
                           _light={{
                            color:'black',
                            }}
                          _dark={{
                            color:"gray.300",
                            }}
                            />
                             }
                            variant = "rounded"
                            placeholder =  "Nom d'utilisateur"
                            onChangeText={(text)=> {this.Nom = text}}
                            value = {this.Nom}
                            _light={{
                            placeholderTextColor:"blueGray.400",
        
                            }}
                             _dark={{
                             placeholderTextColor:"blueGray.50",
        
                             }}
                        />
                            </View>
                        </View>
        
                 {/* Email*/}
        
                <View style={styles.buttonStyleX}>
                    <View style={styles.input}>
                     <Input
                         InputLeftElement={
                             <Icon
                                  as={<MaterialCommunityIcons name="email"/>}
                             size="xs"
                               m={2}
                           _light={{
                            color:'black',
                            }}
                          _dark={{
                            color:"gray.300",
                            }}
                            />
                             }
                            variant = "rounded"
                            placeholder =  "Email"
                            onChangeText={(text)=> {this.Email = text}}
                            value = {this.Email}
                            _light={{
                            placeholderTextColor:"blueGray.400",
        
                            }}
                             _dark={{
                             placeholderTextColor:"blueGray.50",
        
                             }}
                        />
                            </View>
                        </View>            
        
        
                      {/*Button recherche*/}
                      <View style= {styles.buttonStyle}>
                        <TouchableHighlight style={styles.buttonDesign} onPress= {this.searchButton}>
                            <Button style = {styles.textStyle}>Rechercher</Button>                       
                      </TouchableHighlight>    
                     </View>

                     {/*Button Supprimer*/}           
                      <View style= {styles.buttonStyle}>
                        <TouchableHighlight style={styles.buttonDesign} onPress= {this.deleteButton}>
                            <Button style = {styles.textStyle}>Supprimer</Button>                       
                      </TouchableHighlight>    
                     </View>

                     {/*Button Modifier*/}           
                     <View style= {styles.buttonStyle}>
                        <TouchableHighlight style={styles.buttonDesign} onPress= {this.updateButton}>
                            <Button style = {styles.textStyle}>Modifier</Button>                       
                      </TouchableHighlight>    
                     </View>


                
                     <ScrollView contentContainerStyle={styles.container}>
                     <Text style={styles.Scroll}>{dataDisplay}</Text>
                     </ScrollView>
                                               
                </ImageBackground>            
            </View>
            </ScrollView>
            </NativeBaseProvider>
            
        );
        
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    Scroll:{
        color:'#1C6785',
        fontSize:23,
        fontFamily:'monospace',
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

     
     input:{
        marginTop:10,
        marginRight:5,
     },

     buttonStyle:{
        marginTop:20,
        marginRight:15,
        paddingLeft:65,
        width:'80%',
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

AppRegistry.registerComponent('navigation', () => AdminPa);