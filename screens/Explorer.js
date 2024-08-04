import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, Button, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Logo from "../SVG/logo";
import Recherche from "../SVG/Search";
import Notice from "../SVG/Notif";
import Menu from "../SVG/Menu";
import Bar1 from "../SVG/TopBar1";
import TabBar from './TabBar'
import Personne from "../SVG/Perso"
import { useState } from 'react';

function Explorer({ navigation }) {
  const [themeColor, setThemeColor] = useState('#fff');
  function changeThemeColor(){
    if(themeColor == '#fff'){
      setThemeColor('#010813')
      return('#010813');
    }else{
      setThemeColor('#fff')
      return('#fff');    
    }
  }
  return (
    <View style={{ backgroundColor: `${themeColor}`, height: 1000}}>
        <View style={styles.nav2}>
            <Recherche style={styles.search} />
        </View>
        <View style={styles.nav3}>
            <Notice style={styles.notice} />
        </View>
        <View style={styles.nav4}>
            <Menu style={styles.menu} />
        </View>
        <View style={styles.drawer}>
            {/* <Personne/> */}
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={styles.coiffeur} source={require('./../ressource/coiffeur.png')}  />
            </TouchableOpacity>
        </View>
        <View style={styles.part1}>
          <Button onPress={() => changeThemeColor()} title="DarkMode" />
        </View>
        <Text style={{color: changeThemeColor}}>Yoooooooo</Text>
    </View>

  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Explorer" component={Explorer} options={{headerShown: false}} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  body: {
      backgroundColor: '#010813',
      // width: 500,
      height: 1000,
      // justifyContent: 'space-between'
  },
  cercle: {
      display: 'flex',
      justifyContent: 'space-between',
      left: 25,
      top: 50,
  },
  search: {
      display: 'flex',
      justifyContent: 'space-between',
      left: 350,
      top: 60,
  },
  notice: {
      display: 'flex',
      justifyContent: 'center',
      left: 400,
      top: 35,
  },
  menu: {
      display: 'flex',
      justifyContent: 'space-between',
      left: 350,
      top: 700
  },
  coiffeur:{
      display: 'flex',
      bottom: 50,
      left: 5,
      borderRadius: 50
  },
  part1:{
      display: 'flex',
      width: 396,
      height: 130,
      borderRadius: 34,
      borderWidth: 1,
      backgroundColor: '#F03D00',
      left: 16
  },
})