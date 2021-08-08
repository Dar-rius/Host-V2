import React from 'react';
import { Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


const Acc = ({ navigation })=>{
    const onPress = () =>{
        navigation.navigate('Home')
    }
    return(
        <ScrollView style={Style.view}>
            <Image source={require('../assestsComp/hopi.png')}
            style={Style.image}
            />
            <Text style={Style.message}>
            Si la COVID-19 se propage dans votre communauté, protégez-vous en prenant quelques précautions simples,
             comme maintenir une distance physique avec autrui, porter un masque, bien ventiler les pièces, éviter les 
             rassemblements, vous laver les mains, et tousser dans votre coude replié ou un mouchoir. Suivez les recommandations locales
             là où vous vivez et travaillez. Faites tout cela !<br/> OMS
            </Text>

            <TouchableOpacity style={Style.bouton}
            onPress={onPress}>
            Suivant    
            </TouchableOpacity> 

            
        </ScrollView>
    )
}

const Style = StyleSheet.create({
    image:{
        flex: 1,
        alignSelf: 'center',
        width: 50, 
        height: 50,
        marginTop: 120
    },

    message:{
        textAlign: 'center',
        margin: 15,
        color:'white',
        fontSize: 17,
    },

    bouton:{
        textAlign: 'center',
        margin:40,
        padding: 7,
        marginBottom: 100,
        color:'white',
        backgroundColor:'#5DADE2',
        fontSize:25,
        borderRadius: 10,
        fontWeight: 'bold'
    },

    view:{
        backgroundColor: '#E74C3C',
        fontFamily: 'Roboto, sans-serif'
    }
})

export default Acc