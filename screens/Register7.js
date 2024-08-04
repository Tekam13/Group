import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput, Alert} from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import React, { useState } from 'react';
import Cart from "../SVG/Cart";

//const Stack = createStackNavigator();


export default function Register7(){
    const [motdepasse, setmotdepasse] = useState('');
    const route=useRoute();
      const {inputValues,nom,prenom}= route.params;
      const handleNext = () => {
        if (motdepasse.trim() === '') {
            Alert.alert('Erreur', 'Veuillez entrer votre mot de passe.');
            return;
          }
        navigation.navigate("Register8", {inputValues,nom,prenom,motdepasse});
      };

    const navigation = useNavigation();
    const [mood, setMood] = useState('');
    return(
        <View style={styles.body}> 
            <View style={styles.div1}>  
                {/* <Image style={styles.rgt1} source={require('./../ressource/cart.png')}/> */}
                {/* <TouchableOpacity style={styles.rgt11} onPress={()=>navigation.goBack('Register6')}>
                    <Cart style={styles.rgt1} onPress={()=>navigation.goBack('Register6')} />
                </TouchableOpacity> */}
                <Cart style={styles.rgt1} onPress={()=>navigation.goBack('Register6')} />
            </View>
            <View style={styles.div2}>
                <Image style={styles.rtt} source={require('./../ressource/mp.png')}/>
            </View>
            <View style={styles.div3}>
                <TextInput style={styles.input} placeholder="oooo"
                    onChangeText={(text)=>setmotdepasse(text)}
                value={motdepasse}
                /> 
            </View> 
            <View style={styles.div5}> 
            </View> 
            <View style={styles.div7}>
                <Image style={styles.condition2} source={require('./../ressource/npn.png')}/>
            </View>
            <View style={styles.div8}>
                <TouchableOpacity style={styles.btn} onPress={handleNext}>
                    <Text style={styles.tbt}>Suivant</Text>
                </TouchableOpacity>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#FFFFFF',
        width: 500,
        height: 900,
    },
    rgt1:{  
        position: 'relative',
        display: 'flex',
        top: 50,
        left: 15
    },
    rtt:{
        position: 'relative',
        display: 'flex',
        top: 120,
        left:30
    },
    input:{
        position: 'relative',
        display: 'flex',
        top: 160,
        width: 396,
        height:72,
        borderWidth: 2,
        borderColor: 'gray',
        left: 25,
        fontSize: 30,
        borderRadius: 24,
        gap: 10
    },
    outter:{
        position:'relative',
        display: 'flex',
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 15,
        top: 180,
        left: 25
    },
    inner:{
        position:'relative',
        display: 'flex',
        width: 15,
        height: 15,
        backgroundColor: 'gray',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent:'center',
        left:3.5,
        top: 3.5
    },
    textC:{
        position:'relative',
        display: 'flex',
        top: 155,
        left: 60,
        fontSize: 18
    },
    condition2:{
        position:'relative',
        display: 'flex',
        top: 190,
        left: 25, 
    }, 
    btn:{
        position:'relative',
        display: 'flex',
        width: 396, 
        height:56,
        borderRadius: 32,
        top: 205,
        left: 50,
        left: 25,
        backgroundColor: '#1D0800'
    },
    tbt:{
        position:'relative',
        display: 'flex',
        textAlign:'center',
        top: 15,
        color: 'white',
        fontSize: 22,
    }
})