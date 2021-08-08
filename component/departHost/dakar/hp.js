import React  from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

export default function Hp(){
    var num = "+221 33 839 50 50"
    var lieu = "Rte de la corniche estate"
    return(
        <View>
            <Image source={require('./imageHost/hp.jpg')}/>
            <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>Hopital Principal</Text>
            <Text style={{margin: 10, fontSize:15, fontWeight:'bold', color:'#3498DB'}}>
                Lieu: {lieu}</Text>
            <Text style={{margin: 10, fontSize:15, fontWeight:'bold', color:'#3498DB'}}>Tél: {num}</Text>

        </View>
    )
}
const Style = StyleSheet.create({
    image:{
        flex:1,
        alignSelf:"center",
    }
})