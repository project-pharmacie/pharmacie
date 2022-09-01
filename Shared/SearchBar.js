
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TextInput, Image
} from 'react-native';



export default function Searchbar({ value, style, onChangeText }) {

  const [query, setQuery] = useState();
  const [error, setError] = useState()
  return (
      <View style={[styles.container]}>
          <View style={styles.searchContainer}>
              <View style={styles.vwSearch}>
                  <Image
                      style={styles.icSearch}
                      source={require('../assets/img/ic_search3.png')} />
              </View>
              <TextInput
                  value={value}
                  placeholder="Rechercher"
                  style={styles.textInput}  
                  onChangeText={onChangeText}
              />
              
          </View>    
      </View >
  )
}

const styles = StyleSheet.create({
    container: {   
        height: 80,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },

  vwClear: {
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
  },
  textInput: {
       backgroundColor: '#F8F8F8',
       flex: 1,
  },

  vwSearch:{
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
      // width: 40,
      backgroundColor: '#F8F8F8'
  },
  icSearch: {
      height: 18, width: 18
  },

  searchContainer:{
      backgroundColor: 'white',
      width: '90%',
      height: 40,
      flexDirection: 'row'

  },
  container: {
      height: 50,
      alignItems: 'center',
      // height: '100%', width: '100%' 
  },
});