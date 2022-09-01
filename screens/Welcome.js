import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function Welcome(props) {
    const navigation = useNavigation();
    return (

        
        <View style={styles.container}>

            
            <ImageBackground source={require('../assets/img/b13.jpg')}
                 style={styles.ImageB}>
           

            <View style={styles.ImageX}>
            <Image source={require('../assets/img/i2.png') } alt=" ImagePh"/>
            </View>
           
            
            <View style={styles.Middle}>
                <Text style={styles.BiText}>Bienvenue sur Pharma</Text>
               
                <Text style={styles.Text1}>Pharma vous permet de localiser</Text>
                <Text style={styles.Text1}>   votre produit à distance  </Text>
               
            </View>
            
            
            {/*Button Patient */}

            <View style= {styles.buttonStyle}>  
                <Button style={styles.buttonDesign1}  
                onPress={() => navigation.navigate("LoginPa")}>Patient</Button>
            </View>

            
            {/*Button Pharmacie */}

            <View style= {styles.buttonStyle}> 
                <Button style={styles.buttonDesign2}  
                onPress={() => navigation.navigate("LoginPh")}>Pharmacie</Button>
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



})



// import React, { useState, useEffect } from 'react';
// import {
//     StyleSheet,
//     View,
//     Text, 
//     FlatList,
//     SafeAreaView,
//     TouchableOpacity,
// } from 'react-native';
// import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio} from 'native-base';
// import { useNavigation } from '@react-navigation/native';

// import Searchbar from '../Shared/SearchBar'

// //const Mon_URL= "http://192.168.1.41:4000";

// // const data = [
// //   { id: '1', title: 'EFFERALGANT '},
// //   { id: '2', title: 'DOLIPRANE' },
// //   { id: '3', title: 'VOLTARENE' },
// //   { id: '4', title: 'DAFALGAN' },
// //   { id: '5', title: 'LEVOTHYROX' },
// //   { id: '6', title: 'IMODUIM' },
// //   { id: '7', title: 'KARDEGIC' },
// //   { id: '8', title: 'IXPRIM' },
// //   { id: '9', title: 'FORLAX' },
// //   { id: '10', title: 'GAVISCON' },

// // ];

//  const Produit = (props) => {
//   const [filterdData,setfilterdData] = useState([]);
//   const [masterData, setmasterData] = useState([]);
 
//   useEffect(() => {
//     fetchPosts();
//     return () => {
//     };
//   }, [])



//     const navigation = useNavigation();
//     const [value, setValue] = useState()
    
//     function updateSearch(value) {
//         //do your search logic or anything
//         console.log()
//     }

//     const fetchPosts = () =>{
//       const apiURL ="http://192.168.1.119:4000";
//       fetch(apiURL,{
//          method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((responseJson) =>{
//           setfilterdData(responseJson);
//           setmasterData(responseJson)
//       }).catch((error)=> {
//         console.error(error);
//       })
//     }

//    const  ItemView = ({item})=> {
//     return (
//       <Text>
//         <Text style={styles.itemStyle}></Text>
//         {item.id}{'. '}{item.title.toUpperCase()}
//       </Text>
//     )
//    }
//    const ItemSeparatorView = () => {
//     return (
//       <View
//         style={{height : 0.5, width :'100%', backgroundColor:'#c8c8c8'}}
//       />
//     )

//    }



//     return (

//         <View style={styles.container}>
       
//             <View style={{ height: '20%', backgroundColor: "white", borderRadius: 10, }}>
              
//                 <Searchbar
//                     value={value}
//                     updateSearch={updateSearch}
//                     style={{ marginTop: '8%' }}
//                 />

//                  <View style={styles.ImageX}>
               
//                  <Image source={require('../assets/img/listegreen.png') }
//                  alt=" ImagePharmacie"/>
                 
//                  <Image source={require('../assets/img/blocgreen.png') }
//                  alt=" ImagePharmacie"/>
                
//               </View>
//             </View>
//             <View style={styles.flatList}>
//              <FlatList
//                    data={filterdData}
//                    keyExtractor={(item,index) => index.toString()}
//                    ItemSeparatorComponent={ItemSeparatorView}
//                    renderItem={ ItemView }
//              />
//             </View>


//             <View style={styles.lineStyle}>
//                 <View style={{flex:1, height:1, backgroundColor:'#F8F8F8'}}/>
              
              
//             </View>            
                  
         
//            </View>



//     )
//   }
//     export default ()=>{
//       return (
//           <NativeBaseProvider>
//               <Produit/>
//           </NativeBaseProvider>
//       )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//          backgroundColor: 'white', 
//         //  height: '100%', width: '100%' 
//     },

//     itemStyle: {
//       padding:10 
//     },

//   //   flatList: {
//   //     justifyContent: "space-between",
//   //     paddingBottom:20,
//   //     flex: 1,
//   //    // alignItems: 'center'  
//   // },

//   //   text: {
//   //     fontSize: 20,
//   //     color: '#101010',
//   //     marginTop: 60,
//   //     fontWeight: '700'
//   //   },

//    ImageX:{
//        flexDirection:'row',
//        paddingRight:18,
//        paddingLeft:280,
//        justifyContent:'space-between',
//      },

//   //   listItem: {
//   //     marginBottom:20,
//   //     marginRight:40,
//   //     marginLeft:20,
//   //     //marginTop: 10,
//   //     paddingBottom:20,
//   //     padding: 20,
//   //     alignItems: 'center',
//   //     borderColor:'#F8F8F8',
//   //     backgroundColor: 'white',
//   //     borderWidth:2,
//   //     width: '90%',
//   //     borderRadius:15,
//   //   },
  
//   //     listItemText: {
//   //     fontSize: 14
//   //   },


//   //   lineStyle:{
//   //     flexDirection:'row',
//   //     marginBottom:20,
//   //    // marginTop:80,
//   //    // marginLeft:15,
//   //    // marginRight:15,
//   //     alignItems:'center',
//   // },

// });