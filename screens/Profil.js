import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
 
export default function Profil() {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.ttt}>Bonjour Raoul</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#1D0800',
        width: 500,
        justifyContent: 'space-between'
    },
    ttt:{
        fontSize: 35
    }
})