import React from 'react'
import {ScrollView, Text} from 'react-native'
import { Card, Button } from 'react-native-elements'

const CliDepart = ({ navigation }) =>{
    return(
        <ScrollView>
            <Card>
                <Card.Image source={require('../departCli/assetsCli/dakar.jpg')} />
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                        Dakar
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../departCli/assetsCli/gue.jpg')} />
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                    Guédiawaye
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('')}/>
            </Card>

            <Card>
                <Card.Image source={require('../departCli/assetsCli/rufisque.jpeg')} />
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                        Rufisque
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../departCli/assetsCli/pikine.jpg')} />
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                        Pikine
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
export default CliDepart