import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from 'react';
import Logo from "../SVG/logo";
import Recherche from "../SVG/Search";
import Notice from "../SVG/Notif";
import Menu from "../SVG/Menu";
import Bar1 from "../SVG/TopBar1";
import TabBar from './TabBar'


export default function Connects() {


    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <View style={styles.nav1}>
                <Logo style={styles.cercle} />
            </View>
            <View style={styles.nav2}>
                <Recherche style={styles.search} />
            </View>
            <View style={styles.nav3}>
                <Notice style={styles.notice} />
            </View>
            <View style={styles.nav4}>
                <Menu style={styles.menu} />
            </View>
            <View style={styles.topbar1}>
                <TouchableOpacity>
                    <Bar1 style={styles.bar1} />
                </TouchableOpacity>
                <Text style={styles.tx1}>Explorer</Text>
            </View>

            
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
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
        top: 25,
    },
    notice: {
        display: 'flex',
        justifyContent: 'center',
        left: 400,
        top: 2,
    },
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
        left: 350,
        top: 650
    },
    bar1:{
        display: 'flex',
        top: 720
    },
})