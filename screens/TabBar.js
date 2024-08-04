import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

// Importez vos composants de page
import Explorer from './Explorer';
import Recompense from './Recompense';
import RendezVous from './RendezVous';
import Profil from './Profil';


// Importez vos composants SVG
import Bar1 from '../SVG/TopBar1'
import Bar2 from '../SVG/TopBar2'
import Bar3 from '../SVG/TopBar3'
import Bar4 from '../SVG/TopBar4'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const BottomNavigator = () => {
  const [fontsLoaded] = useFonts({
    
});

if (!fontsLoaded) {
    return null; // Ou un indicateur de chargement
}
  return (
    <Tab.Navigator
      initialRouteName="Explorer"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          switch (route.name) {
            case 'Explorer':
              iconComponent = <Bar1 style={[styles.icon, { tintColor: focused ? '#D9D9D9' : '#D9D9D9' }]} />;
              break;
            case 'Recompense':
              iconComponent = <Bar2 style={[styles.icon, { tintColor: focused ? '#D9D9D9' : '#D9D9D9' }]}  />;
              break;
            case 'Rendez-vous':
              iconComponent = <Bar3 style={[styles.icon, { tintColor: focused ? '#D9D9D9' : '#153D1C' }]} />;
              break;
            case 'Profil':
              iconComponent = <Bar4 style={[styles.icon, { borderWidth: focused ? 4 : 0, borderColor: focused ? '#EEFF49' : 'transparent', borderRadius: 25 }]} />;
              break;
          }

          return (
            <View style={styles.iconContainer}>
              {iconComponent}
              <Text style={[styles.label, { color: focused ? '#153D1C' : '#153D1C', /*fontFamily: focused ? 'regularBold' : 'regular',*/ }]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarActiveTintColor: 'transparent',
        tabBarInactiveTintColor: 'transparent',
      })}
    >
      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Recompense"
        component={Recompense}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Rendez-vous"
        component={RendezVous}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#010813'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: 20,
    bottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
  },
  containerBo:{
    backgroundColor: '#010813'
  }, 
  
});

export default BottomNavigator;