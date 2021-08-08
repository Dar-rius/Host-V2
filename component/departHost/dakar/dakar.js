import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'

const Dakar = ({ navigation })=>{
    return(
        <ScrollView>
            <Card>
                <Card.Image source={require('../assetsHost/HopitalprincipalDkr.jpg')} style={{ }}/>
                    <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>
                        Hopital Principal
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('Hop')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../assetsHost/senghor.jpg')} style={{ }}/>
                    <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>
                        Hopital Phillipe.M.Senghor
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('Details')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../assetsHost/samu.jpg')} style={{}}/>
                    <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>
                    Centre de sante SAMU Municipal
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('')}/>
            </Card>

            <Card>
                <Card.Image source={require('../assetsHost/ka.jpg')} />
                    <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>
                    Centre de sante Gaspard Camara
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('')
                      }/>
            </Card>

            <Card>
                <Card.Image source={require('../assetsHost/ndao.jpg')} />
                    <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>
                    Hopital Abass Ndao
                    </Text>
                    <Button
                    buttontyle={{borderRadius: 10, backgroundColor:'#5DADE2'}}
                    title='Voir' 
                    onPress={() =>
                        navigation.navigate('')}/>
            </Card>

            <Card>
                <Card.Image source={require('../assetsHost/grand yoff.jpg')} />
                    <Text style={{margin: 10, fontSize:17, fontWeight:'bold', color:'#3498DB'}}>
                    Hopital Idrissa Pouye
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

export default Dakar