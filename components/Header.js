import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.Header}>
            <Text style={styles.Title2}>My ToDo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
      height: 80,
      paddingTop:38,
      backgroundColor: '#31E1F7'
    },
    Title2: {
        textShadowOffset: { width: 2, height: 2 },
        textShadowColor: '#555555',
        textShadowRadius: 6,
        fontSize: 24,
        color: '#FEFBF6',
        textAlign: 'center',
    },

    Title:{
        color: '#FEFBF6',
 
        fontSize: 20,
     
        fontStyle: 'italic',
     
        fontWeight: 'bold',
     
        lineHeight: 40,
     
        textAlign: 'center',
             
        //textShadowColor: '#D50000',
     
        fontFamily: 'sans-serif',
     
        textShadowRadius: 4,
     
        textShadowOffset: {width: 2, height: 2},
     
        textTransform: 'uppercase',
     
        textAlignVertical : 'top',
    }
})
