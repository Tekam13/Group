import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// const Stack = createStackNavigator();
export default function Splash(){ 
    const navigation = useNavigation();
    return( 
        <View style={styles.body}>                  
            <View style={styles.part1}>
                <Image style={styles.imp1} source={require('./../ressource/Vector.png')}/>
            </View>
            <View style={styles.part2}>
                <Image style={styles.imp2} source={require('./../ressource/Frame.png')}/>
            </View>
            <View style={styles.part3}>
                <Image style={styles.imp3} source={require('./../ressource/image.png')}/>
            </View>
            <View style={styles.div4}> 
            <Text onPress={()=>navigation.navigate('Onboard1')} style={styles.pass}>Next</Text>
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
    imp1:{
        display: 'flex',
        bottom: 17
    },
    imp2:{
        position: 'relative',
        display: 'flex',
        bottom: 330,
        left: 120
    },
    imp3:{
        display: 'flex',
        bottom: 520,
    },
    pass:{
        position: 'relative',
        display: 'flex',
        bottom: 660,
        color: '#fff',
        left: 370
    } 
     
})