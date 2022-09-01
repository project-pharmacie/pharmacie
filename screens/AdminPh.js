import React, { Component } from 'react';
import {AppRegistry, ImageBackground, View, Text, TouchableOpacity,BaseNavigationContainer, StyleSheet, Alert } from 'react-native';
import { Input,TextInput,NativeBaseProvider, Button, Icon, Image, ScrollView }from 'native-base';
import { FontAwesome5,FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Mon_URL= "http://192.168.52.13:6567";

export default class AdminPh extends Component{
    constructor(props){
        super(props)
        this.state = {
            apiData:[],
            naData :[],
        }
        this.dataIdPharmacie=null;
        this.Nom = null;
        this.Email = null;
        this.Telephone = null;
        this.Adresse = null;
        
    }


// button d'affichage
    getButton = () => {
        fetch(Mon_URL+'/pharmacie',{
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({apiData: jsonData})
            console.log(this.state.apiData);
        }).done();
        this.dataIdPharmacie = null ;      
    }


// button d'ajout
    saveButton = () => {
        fetch(Mon_URL+'/pharmacie',{
            method: 'POST',
            headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
            body: JSON.stringify({Nom: this.Nom, Email: this.Email, Telephone : this.Telephone, Adresse : this.Adresse})
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({naData: jsonData})
            console.log(this.state.naData);
        }).done();
       this.dataIdPharmacie = null ;
       this.Nom = null ;
       this.Email = null ;
       this.Telephone = null ;
       this.Adresse = null; 
     
    }



// button recherche
    searchButton = () => {
        fetch(Mon_URL+'/pharmacie/'+(this.dataIdPharmacie),{
            method: 'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({apiData: jsonData})
           // console.log(this.state.apiData);
        }).done();
        this.dataIdPharmacie = null ;      
    }



 // button Supprimer
    deleteButton = () => {
        fetch(Mon_URL+'/pharmacie/'+(this.dataIdPharmacie),{
            method: 'DELETE'
        }).then((responseData) => {
            console.log(responseData.rows)
        }).done();
        this.dataIdPharmacie = null;      
    }



    //button Modifier
    updateButton = () => {
        fetch(Mon_URL+'/pharmacie',{
            method: 'PUT',
            headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
            body: JSON.stringify({Nom: this.Nom, Email: this.Email, Telephone : this.Telephone, Adresse : this.Adresse,
                                    IdPharmacie: this.dataIdPharmacie})
        }).then((responseData) => {
            return responseData.json();
        }).then((res)=>{
            console.log('res', res)
            Alert.alert('test')
        });
       this.dataIdPharmacie = null ;
       this.Nom = null ;
       this.Email = null ;
       this.Telephone = null ;
       this.Adresse = null; 
    }






    render() {
        const data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData){
            return(
                <View key={jsonData.IdPharmacie}>
                    <View style={{flexDirection:'row'}} >
                        <Text style={{ color:'#0C83FA',marginLeft:50,fontWeight:'bold'}}>{jsonData.IdPharmacie} - </Text>
                        <Text style={{ color:'#0C83FA',fontWeight:'bold'}}>{jsonData.Nom } - </Text>
                        <Text style={{ color:'#0C83FA',fontWeight:'bold'}}>{jsonData.Email} - </Text>
                        <Text style={{ color:'#0C83FA',fontWeight:'bold'}}>{jsonData.Telephone} - </Text>
                        <Text style={{ color:'#0C83FA',fontWeight:'bold'}}>{jsonData.Adresse}</Text>
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
                            onChangeText={(text)=> {this.dataIdPharmacie = text}}
                            value = {this.dataIdPharmacie}
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
        
        
        
                {/* Telephone*/}
        
                <View style={styles.buttonStyleX}>
                    <View style={styles.input}>
                     <Input
                         InputLeftElement={
                             <Icon
                                  as={<MaterialCommunityIcons name="phone"/>}
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
                            placeholder =  "Telephone"
                            onChangeText={(text)=> {this.Telephone = text}}
                            value = {this.Telephone}
                            _light={{
                            placeholderTextColor:"blueGray.400",
        
                            }}
                             _dark={{
                             placeholderTextColor:"blueGray.50",
        
                             }}
                        />
                            </View>
                        </View>
        
        
                        {/* Address*/}
        
                <View style={styles.buttonStyleX}>
                    <View style={styles.input}>
                     <Input
                         InputLeftElement={
                             <Icon
                                  as={<FontAwesome name="address-book"/>}
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
                            placeholder =  "Adresse"
                            onChangeText={(text)=> {this.Adresse = text}}
                            value = {this.Adress}
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

                     {/* Button Sauvegarde
                     <View style= {styles.buttonStyle}>
                        <TouchableHighlight style={styles.buttonDesign} onPress= {this.saveButton}>
                            <Button style = {styles.textStyle}>Sauvegarder</Button>                       
                      </TouchableHighlight>    
                     </View> */}

                     

                    {/* Button Affichage           
                    <View style= {styles.buttonStyle}>
                        <TouchableHighlight style={styles.buttonDesign} onPress= {this.getButton}>
                            <Button style = {styles.textStyle}>Afficher</Button>                       
                      </TouchableHighlight>    
                     </View> */}

                     
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

AppRegistry.registerComponent('navigation', () => AdminPh);