import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import Acc from './component/home/accueille/acc';
import Home from './component/home/home';
import HostDepart from './component/departHost/homeDepartHost';
import CliDepart from './component/departCli/homeDepartCli';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dakar from './component/departHost/dakar/dakar'
import Gue from './component/departHost/gue/gue'
import Pikine from './component/departHost/pikine/pikine'
import Rufis from './component/departHost/rufis/rufis'
import Sengor from './component/departHost/dakar/senghor'
import Hp from './component/departHost/dakar/hp'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Message"
          component={Acc}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hopitaux" component={HostDepart} />
        <Stack.Screen name="Cliniques" component={CliDepart} />
        <Stack.Screen name="Dakar" component={Dakar} />
        <Stack.Screen name="Rufisque" component={Rufis} />
        <Stack.Screen name="Guedaiwaye" component={Gue} />
        <Stack.Screen name="Pikine" component={Pikine} />
        <Stack.Screen name="Details" component={Sengor} />
        <Stack.Screen name="Hop" component={Hp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
