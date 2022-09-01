import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function Welcome() {
    const navigation = useNavigation();
    return (

        
        <View style={styles.container}>

            
            <ImageBackground source={require('../assets/img/B13.png')}
                 style={styles.ImageB}>
           

            <View style={styles.ImageX}>
            <Image source={require('../assets/img/i2.png') } alt=" ImagePh"/>
            </View>
           
            
            <View style={styles.Middle}>
                <Text style={styles.BiText}>Bienvenue sur Pharma</Text>
               
            </View>
            
            
            {/*Button Pharmacie */}

            <View style= {styles.buttonStyle}>  
                <Button style={styles.buttonDesign1}  
                onPress={() => navigation.navigate("AdminPh")}>Pharmacie</Button>
            </View>

            
            {/*Button Patient */}

            <View style= {styles.buttonStyle}>  
                <Button style={styles.buttonDesign2}  
                onPress={() => navigation.navigate("AdminPa")}>Patient</Button>
            </View>
            
            {/*Button Produit */}

            <View style= {styles.buttonStyle}> 
                <Button style={styles.buttonDesign3}  
                onPress={() => navigation.navigate("AdminPr")}>Produit</Button>
            </View>
           
             </ImageBackground>
             </View>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Welcome/>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    
    container:{
        flex:1,
        
    },

    ImageB:{
        
        height:'100%',
        width:'100%',
  
    },


    ImageX:{
        
        height:'20%',
        alignItems:'center',
       
    },


    BiText:{
        color:'#1C6785',
        paddingBottom:40,
        marginTop:150,
        fontSize:23,
        fontFamily:'monospace',
        fontWeight:'bold'
    },
    
   
    Text1:{
        color:'#1C6785',
        fontFamily:'monospace',
       

         
    },

    Middle:{
        alignItems:'center',
        justifyContent:'center',
    },


    buttonStyle:{
        marginTop:50,
        marginRight:15,
        paddingLeft:40,
        width:'90%',
        elevation: 8,
        

     },


     buttonDesign1:{
        marginTop:20,
        backgroundColor:'#75CDC5',
        fontWeight:'bold',
     },
     
     buttonDesign2:{
        fontWeight:'bold',
        backgroundColor:'#75CDC5',
    
     },

     buttonDesign3:{
        fontWeight:'bold',
        backgroundColor:'#75CDC5',
    
     },



})