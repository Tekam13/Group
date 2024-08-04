import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput, isHovered, Button, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from 'react';
import Cart from "../SVG/Cart";
import axios from "axios";

//const Stack = createStackNavigator();


export default function Register2() {
    const [inputValues, setInputValues] = useState(''); 
    // const route = useRoute();
    // const [telephone, setTelephone] = useState('');
    //const { fullName} = route.params;

    const handleNext = () => {

        if (inputValues.trim() === '') {
            Alert.alert('Erreur', 'Veuillez entrer votre numéro de téléphone.');
            return;
          }
        navigation.navigate("Register3", {inputValues});
      };   

    // const [telephone, setTelephone] = useState("");
    // const handleText = () => {
    //     if(telephone.trim() === ''){
    //         Alert.alert('Erreur', 'Veuillez entrez votre telephone');
    //         return;
    //     }
    //     navigation.navigate("Register", {telephone})
    // }


   // const [inputValue, setInputValue] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);
    const navigation = useNavigation();
        
    const handleInputChange = (text) => {
        setInputValues(text);
        setIsInputValid(text.length === 9);
    };

    const [mood, setMood] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.div1}>
                {/* <Image style={styles.rgt1} source={require('./../ressource/cart.png')}/> */}
                {/* <TouchableOpacity style={styles.abo} onPress={()=>navigation.goBack('Onboard3')}>
                    <Cart style={styles.rgt1} onPress={()=>navigation.goBack('Onboard3')} />
                </TouchableOpacity> */}
                <Cart style={styles.rgt1} onPress={()=>navigation.goBack('Onboard3')} />
            </View>
            <View style={styles.div2}>
                <Image style={styles.rtt} source={require('./../ressource/t1.png')} />
            </View>
            <View style={styles.div3}>
                {/* <TextInput style={styles.input} placeholder="Téléphone"/> */}
                <TextInput
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={inputValues}
                    placeholder="   Téléphone"
                    keyboardType="numeric"
                />
                {!isInputValid && inputValues.length > 0 && (
                    <Text style={styles.errorText}>Veuillez entrer 9 caractères.</Text>
                )}
                {/* <Button
                    title="Valider"
                    disabled={!isValidNumber}
                    style={isValidNumber ? styles.buttonEnabled : styles.buttonDisabled}
                /> */}
            </View>
            <View style={styles.div5}>
                <View>
                    {['happy'].map(feeling => (
                        <View key={feeling}>
                            <TouchableOpacity style={styles.outter} onPress={() => setMood(feeling)}>

                                {mood === feeling && <View style={styles.inner} />}
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

            </View>
            <View style={styles.div6}>
                <Text style={styles.textC}>Il s’agit de mon numero WhatsApp</Text>
            </View>
            <View style={styles.div7}>
                <Image style={styles.condition} source={require('./../ressource/con2.png')} />
            </View>
            <View style={styles.div8}>  
                <TouchableOpacity 
                    style={[styles.btn, isInputValid ? styles.buttonEnabled : styles.buttonDisabled]}
                    onPress={handleNext}
                    disabled={!isInputValid}
                >
                    <Text style={{color: '#fff', fontSize: 16,}}>
                        Suivant
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
        width: 500,
        justifyContent: 'space-between'
    },
    rgt1: {
        display: 'flex',
        justifyContent: 'space-between',
        top: 50,
        left: 15,
    },
    rtt: {
        display: 'flex',
        justifyContent: 'space-between',
        top: 120,
        left: 30
    },
    input: {
        display: 'flex',
        justifyContent: 'space-between',
        top: 160,
        width: 396,
        height: 72,
        borderWidth: 2,
        borderColor: 'gray',
        left: 25,
        fontSize: 30,
        borderRadius: 24,
        gap: 10
    },
    outter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 15,
        top: 180,
        left: 25
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 15,
        height: 15,
        backgroundColor: 'gray',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        left: 3.5,
        top: 3.5
    },
    textC: {
        display: 'flex',
        justifyContent: 'space-between',
        top: 155,
        left: 60,
        fontSize: 18
    },
    condition: {
        display: 'flex',
        justifyContent: 'space-between',
        top: 170,
        left: 25,
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 396,
        height: 56,
        borderRadius: 32,
        top: 200,
        left: 50,
        left: 25,
        backgroundColor: '#1D0800'
    },
    tbt: {
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        top: 15,
        color: 'white',
        fontSize: 22,
    },
    buttonEnabled: {
        backgroundColor: '#1D0800',
    },
    buttonDisabled: {
        backgroundColor: '#11111129',
    },
    errorText:{
        display: 'flex',
        top: 60,
        left: 45,
        color: 'red',
        fontSize: 15
    },
})