import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Splash from './screens/Splash'
import Onboard1 from './screens/Onboard1'
import Onboard2 from './screens/Onboard2'
import Onboard3 from './screens/Onboard3'
import Register2 from './screens/Register2'
import Register3 from './screens/Register3'
import Register5 from './screens/Register5'
import Register6 from './screens/Register6'
import Register7 from './screens/Register7'
import Register8 from './screens/Register8'
import Register9 from './screens/Register9'
import Connects from  './screens/Connects'
import Explorer from './screens/Explorer'
import Recompense from './screens/Recompense'
import RendezVous from './screens/RendezVous'
import Profil from './screens/Profil'
import TabBar from './screens/TabBar'

const Stack = createStackNavigator();
export default function Navigation(){
  
  return(
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash"   component={Splash}/>
                <Stack.Screen name="Onboard1" component={Onboard1}/>
                <Stack.Screen name="Onboard2" component={Onboard2}/>
                <Stack.Screen name="Onboard3" component={Onboard3}/>
                <Stack.Screen name="TabBar" component={BottomNavigator}/>
                <Stack.Screen name="Register2" component={Register2}/>
                <Stack.Screen name="Register3" component={Register3}/>
                <Stack.Screen name="Register5" component={Register5}/>
                <Stack.Screen name="Register6" component={Register6}/>
                <Stack.Screen name="Register7" component={Register7}/>
                <Stack.Screen name="Register8" component={Register8}/>
                <Stack.Screen name="Register9" component={Register9}/>
                <Stack.Screen name="Connects" component={Connects}/>
                <Stack.Screen name="Explorer" component={Explorer}/>
                <Stack.Screen name="Recompense" component={Recompense}/>
                <Stack.Screen name="RendezVous" component={RendezVous}/>
                <Stack.Screen name="Profil" component={Profil}/>
            </Stack.Navigator>
        </NavigationContainer>
  )
}