import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fbarre3 from "../SVG/Fbarre3";

//const Stack = createStackNavigator();
export default function Onboard3(){
    const navigation = useNavigation();
    return(
        <View style={styles.body}>
            <View style={styles.div1}>
                <Image style={styles.imgo1} source={require('./../ressource/image23.png')}/>
            </View>
            <View style={styles.div2}>
                {/* <Image style={styles.bimg1} source={require('./../ressource/bo3.png')}/> */}
                <Fbarre3 style={styles.bimg1}/>
            </View>
            <View style={styles.div2}>
                {/* <Image style={styles.imgo2} source={require('./../ressource/to3.png')}/> */}
                <Text style={styles.imgo2}>Payer avec sécurité pour
                    {'\n'}  des compétences</Text>
            </View>
            <View style={styles.div3}>
                <Image style={styles.imgo3} source={require('./../ressource/Group2.png')}/>
            </View>
            <View style={styles.div4}> 
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Commencer à Bimm</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.div5}>
                <Text onPress={()=>navigation.navigate('Register2')} style={styles.con}>Se connecter</Text>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#1D0800',
        width: 500,
        justifyContent: 'space-between'
    },
    imgo1:{
        display: 'fixed',
        justifyContent: 'space-between'
        //bottom: 550,
        //left: 85
    },
    div2:{
        display: 'flex',
        justifyContent: 'space-between',
        bottom: '400'
    },
    bimg1:{
        display: 'flex',
        justifyContent: 'space-between',
        bottom: 550,
        left: 80 
    },
    imgo2:{
        display: 'flex',
        color: '#fff',
        justifyContent: 'space-between',
        fontSize: 35,
        fontWeight: '500',
        textAlign: 'center',
        bottom: 450,
        right: 25
    },
    imgo3:{
        display: 'flex',
        justifyContent: 'space-between',
        bottom: 450,
        left: 35
    },
    btn:{
        display:'flex',
        justifyContent: 'space-between',
        width: 250,
        height: 100,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 60,
        bottom: 380,
        left: 100
    },
    text:{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        top: 35
    },
    con:{
        display: 'flex',
        justifyContent: 'space-between',
        bottom: 190,
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        right: 20 
    }
})