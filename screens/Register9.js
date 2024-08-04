import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import axios from "axios";
//const Stack = createStackNavigator();
export default function Register9(){
    const route=useRoute();
    const {inputValues,nom,prenom,motdepasse,ville}= route.params;
    const navigation = useNavigation();

    const handleRegister = async () => {
    
        try {
            // Créer un formulaire de données
            const formData = new FormData();
            formData.append('data', JSON.stringify({
              telephone: inputValues,
              nom: nom,
              prenom: prenom,
              mot_passe: motdepasse,
              postale: ville,
            }));
            // formData.append('files.image', {
            //   uri: selectedImage,
            //   name: 'avatar.jpg', // Nom du fichier sur le serveur
            //   type: 'image/jpeg', // Type MIME de l'image
            // });
      
            // Envoyer la requête POST
            const response = await axios.post("http://192.168.126.1/api/utilisateurs?populate=*", formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                // http://192.168.126.1/api/utilisateurs?populate=*
              },
            });
              if (response.status === 200) {
                // Registration successful, navigate to the login screen
                navigation.navigate("Tabs");
              } else {
                // Handle the case where registration is unsuccessful
               console.error("Registration failed");
            }
             } catch (error) {
               console.error("Error during registration:", error);
             // Handle the error, e.g., display an error message
           }
        };

    return(
        <View style={styles.body}>
            <View style={styles.div1}>
                <Image style={styles.phone} source={require('./../ressource/tel.png')}/>
            </View>
            <View style={styles.div2}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Tabs')}>
                    <Text style={styles.tbt}>Activer les notifications</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.div3}>
                <Text style={styles.txtB}>Activer plus tard</Text>
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
    phone:{
        position: 'relative',
        display: 'flex',
        top: 150,
        left: 25
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
    },
    txtB:{
        position:'relative',
        display: 'flex',
        textAlign:'center',
        top: 250,
        fontSize: 20,
    }
})