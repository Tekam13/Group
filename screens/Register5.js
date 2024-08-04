import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput, Alert} from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import React, { useState } from 'react';
import Cart from "../SVG/Cart";

//const Stack = createStackNavigator();


export default function Register5(){
    const [nom,setNom]=useState("");
    const navigation = useNavigation();
    const [mood, setMood] = useState('');
    const route=useRoute();
      const {inputValues}= route.params;
      const handleNext = () => {
        if (nom.trim() === '') {
            Alert.alert('Erreur', 'Veuillez entrer votre nom.');
            return;
          }
        navigation.navigate("Register6", {inputValues,nom});
      }; 
    return(
        <View style={styles.body}> 
            <View style={styles.div1}>  
                {/* <Image style={styles.rgt1} source={require('./../ressource/cart.png')}/> */}
                {/* <TouchableOpacity style={styles.rgt11} onPress={()=>navigation.goBack('Register3')}>
                    <Cart style={styles.rgt1} onPress={()=>navigation.goBack('Register3')} />
                </TouchableOpacity> */}
                <Cart style={styles.rgt1} onPress={()=>navigation.goBack('Register3')} />
            </View>
            <View style={styles.div2}>
                <Image style={styles.rtt} source={require('./../ressource/Qn.png')}/>
            </View>
            <View style={styles.div3}>
                <TextInput style={styles.input} placeholder="Votre nom"
                 onChangeText={(text)=>setNom(text)}
                 value={nom}
                /> 
            </View> 
            <View style={styles.div5}> 
            </View> 
            <View style={styles.div7}>
                <Image style={styles.condition1} source={require('./../ressource/npn.png')}/>
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
    condition1:{   
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