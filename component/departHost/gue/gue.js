import React from 'react';
import { Text, ScollView, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'

const Gue = ({ navigation })=>{
    return(
        <ScrollView>
            <Card>
                <Card.Image source={require('../assetsHost/jamm.jpg')} />
                    <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>
                    Hopital Dalal Jamm
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../assetsHost/cambrene.jpg')} />
                    <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>
                    Centre de sante de camberene
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('')}/>
            </Card>

        </ScrollView>
    )
}

export default Gue