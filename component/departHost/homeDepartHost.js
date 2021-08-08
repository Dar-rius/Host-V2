import React from 'react'
import { ScrollView, Text} from 'react-native'
import {Card, Button} from 'react-native-elements'

const HostDepart = ({ navigation }) =>{
    return(
        <ScrollView>
            <Card>
                <Card.Image source={require('../departHost/assetsHost/dakar.jpg')} />
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                        Dakar
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('Dakar')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../departHost/assetsHost/gue.jpg')} />
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                    Guédiawaye
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('Guedaiwaye')}/>
            </Card>

            <Card>
                <Card.Image source={require('../departHost/assetsHost/rufisque.jpeg')} />
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                        Rufisque
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('Rufisque')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../departHost/assetsHost/pikine.jpg')} />
                    <Text style={{margin: 10, fontSize:20, fontWeight:'bold', color:'#3498DB'}}>
                        Pikine
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('Pikine')}/>
            </Card>
        </ScrollView>
    )
}
export default HostDepart