import { Divider } from 'native-base';
import React from 'react';
import { View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const DrawerContent = props => {
    const navigation = useNavigation();
    return(
        <SafeAreaView>
            <View>
                <Image
                    style={{width: 200, height: 250,marginLeft:40}}
                    source={require('../assets/img/logo.png')}
                />
            </View>
          <View>
               
                <TouchableOpacity style={Styles.drawerItem}>
                    <Text style={Styles.drawerText} 
                    onPress={() => navigation.navigate("Acceuil")}>Acceuil</Text>   
                </TouchableOpacity>
               
                <TouchableOpacity style={Styles.drawerItem}>
                    <Text style={Styles.drawerText} 
                    onPress={() => navigation.navigate("Pharmacie")}>Pharmacie</Text>   
                </TouchableOpacity>
                <TouchableOpacity style={Styles.drawerItem}>
                    <Text style={Styles.drawerText} 
                    onPress={() => navigation.navigate("Produit")}>Produit</Text>   
                </TouchableOpacity>

                <TouchableOpacity style={Styles.drawerItem}>
                    <Text style={Styles.drawerText} 
                    onPress={() => navigation.navigate("Localisation")}>Localisation</Text>   
                </TouchableOpacity>

                <TouchableOpacity style={Styles.drawerItem}>
                    <Text style={Styles.drawerText}  
                    onPress={() => navigation.navigate("Login")}>Deconnexion</Text> 
                </TouchableOpacity>


          </View>

        </SafeAreaView>
    )
}



const Styles =StyleSheet.create({

    drawerItem:{
        marginTop: 30,
        width:'100%',
        height: 50,
        paddingLeft: 10 ,
        justifyContent:'center',
    },

    drawerText:{
       
        fontSize:14,
        color:'grey',
        fontWeight:'bold',

    }


})


export default DrawerContent;
