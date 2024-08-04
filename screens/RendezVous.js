import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

 
export default function RendezVous() {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.ttt}>ZEEE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#1D0800',
        width: 500,
        justifyContent: 'space-between'
    },
    ttt: {
        fontSize: 35
    },
})