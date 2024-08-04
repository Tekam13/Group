import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Explorer from './Explorer';
import Recompense from "./Recompense";
import RendezVous from "./RendezVous";
import Profil from "./Profil";
import { StyleSheet, View, Text } from "react-native";
import TopBar1 from '../SVG/TopBar1';
import TopBar2 from '../SVG/TopBar2';
import TopBar3 from '../SVG/TopBar3';
import TopBar4 from '../SVG/TopBar4';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: [
            {
                backgroundColor: '#010813'
            },
            
        ]}} initialRouteName="Explorer"
            tabBarOptions={{
                showLabel: false,
                
            }}
        >
            <Tab.Screen name="Explorer" component={Explorer} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <TopBar1 />
                        {/* <Text>Explorer</Text> */}
                    </View>
                )
            }} />
            <Tab.Screen name="Recompense" component={Recompense} options={{
                tabBarIcon: ({ focused },style={ backgroundColor: '#FFF' }) => (
                    <View>
                        <TopBar2 />
                    </View>
                )
            }} />
            <Tab.Screen name="RendezVous" component={RendezVous} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <TopBar3 />
                    </View>
                )
            }} />
            <Tab.Screen name="Profil" component={Profil} options={{
                tabBarIcon: ({ focused, }) => (
                    <View>
                        <TopBar4  />
                    </View>
                )
            }} />
        </Tab.Navigator>

    )
}
const styles = StyleSheet.create({
    
})

export default Tabs;