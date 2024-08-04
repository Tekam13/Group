import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput, isHovered, Button, Alert} from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import React, { useState } from 'react';
import Cart from "../SVG/Cart";

//const Stack = createStackNavigator();


export default function Register3() {

    

    const route = useRoute();
    // const [password, setPassword] = useState('');
    const {inputValues} = route.params;

    const handleNext = () => {

        if (inputValue.trim() === '') {
            Alert.alert('Erreur', 'Veuillez entrer votre code');
            return;
          }
        navigation.navigate("Register5", {inputValues});
      }; 

    const [inputValue, setInputValue] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);
    const navigation = useNavigation();
        
    const handleInputChange = (text) => {
        setInputValue(text);
        setIsInputValid(text.length === 6);
    };
    return (
        <View style={styles.body}>
            <View style={styles.div1}>
                {/* <Image style={styles.rgt1} source={require('./../ressource/cart.png')}/> */}
                {/* <TouchableOpacity style={styles.rgt11} onPress={()=>navigation.goBack('Register2')}>
                    <Cart style={styles.rgt1} onPress={()=>navigation.goBack('Register2')} />
                </TouchableOpacity> */}
                <Cart style={styles.rgt1} onPress={()=>navigation.goBack('Register2')} />
            </View>
            <View style={styles.div2}>
                <Image style={styles.rtt} source={require('./../ressource/txtC.png')} />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={inputValue}
                    maxLength={9}
                    placeholder="Code 6 chiffre"
                />
                {!isInputValid && inputValue.length > 0 && (
                    <Text style={styles.errorText}>Veuillez entrer 6 caractères.</Text>
                )}
            </View>
            <View style={styles.div5}>
            </View>
            <View style={styles.div7}>
                <Image style={styles.condition} source={require('./../ressource/Rc.png')} />
            </View>
            <View style={styles.div8}>
                <TouchableOpacity
                    style={[styles.btn, isInputValid ? styles.buttonEnabled : styles.buttonDisabled]}
                    onPress={handleNext}
                    disabled={!isInputValid}
                >
                    <Text style={{ color: '#fff', fontSize: 16, }}>
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
        height: 900,
    },
    rgt1: {
        position: 'relative',
        display: 'flex',
        top: 50,
        left: 15
    },
    rtt: {
        position: 'relative',
        display: 'flex',
        top: 120,
        left: 30
    },
    input: {
        position: 'relative',
        display: 'flex',
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
        position: 'relative',
        display: 'flex',
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 15,
        top: 180,
        left: 25
    },
    inner: {
        position: 'relative',
        display: 'flex',
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
        position: 'relative',
        display: 'flex',
        top: 155,
        left: 60,
        fontSize: 18
    },
    condition: {
        position: 'relative',
        display: 'flex',
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
        backgroundColor: '#11111129'
    },
    tbt: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        top: 15,
        color: 'white',
        fontSize: 22,
    }, buttonEnabled: {
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