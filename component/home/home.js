import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements'

const Home = ({ navigation })=>{
    return(
        <View>
            <Card>
                <Card.Image source={require('../home/assestsComp/hospital.png')} style={{width:295}}/>
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                        Hopital
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('Hopitaux')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../home/assestsComp/clinique.png')} style={{width:285}}/>
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                        Clinique
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('Cliniques')}/>
            </Card>
        </View>
    )
}

export default Home