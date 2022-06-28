import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import SignInButton from '../components/SignInButton';
import axios from 'axios';
import TextField from '../components/TextField';
import Toast from 'react-native-simple-toast';


const registerUser = async (fullname, email, password) => {
    const repsonse = await axios.post('https://bcd9-212-47-141-151.eu.ngrok.io/users', {
        fullName: fullname,
        email: email,
        password: password
    });

    return repsonse.data;
}

const SignUpScreen = ({ navigation }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]  = useState(null);
    const [repsonse, setResponse] = useState(null);
    const [invisible, setInvisible] = useState(true);
    const [visibleModal, setVisibleModal] = useState(false);

    const handleSignUp = async (fullname, email, password) => {
    setVisibleModal(true);
     await registerUser(fullName, email, password).then((repsonse) => setResponse(repsonse)).catch(err => setError(err));
     setVisibleModal(false);

     if(error !=null){
         setTimeout(()=>{Toast.showWithGravity("An error occured", Toast.SHORT, Toast.BOTTOM)}, 300)
         
     }
     else {
         setTimeout(() => { Toast.showWithGravity("Registration completed", Toast.SHORT, Toast.BOTTOM)}, 300)
     }
    }

    return (
        <View style={styles.constainer}>

            <Modal animationType='fade' transparent={true} 
            visible = {visibleModal}>
                <View style = {styles.modalView}>
                <ActivityIndicator size='large' color = "#ffa321" animating={true} />
                </View>
            </Modal>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign
                    name="arrowleft"
                    type="material"
                    color='black'
                    size={40}
                />
            </TouchableOpacity>

            <Text style={[styles.welcomeTxt, { marginTop: 80 }]}>Create new</Text>
            <Text style={[styles.welcomeTxt, { marginTop: 1, }]}>account</Text>

            <Text style={styles.inputHeader}>Full name</Text>
            <TextField value={fullName} placeholder="Enter your fullname" 
            changeTextHandler={newText => setFullName(newText)} 
            style = {{ borderBottomColor: "#bfbfbf", borderBottomWidth: 1, marginTop: 5, height: 50} }/>

            <Text style={styles.inputHeader}>Email</Text>
            <TextField value={email} placeholder="Example@gmail.com"
             changeTextHandler={newText => setEmail(newText)} 
             style = {{ borderBottomColor: "#bfbfbf", borderBottomWidth: 1, marginTop: 5, height: 50,} }/>


            <Text style={styles.inputHeader}>Create password</Text>
            <View>
                <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5}}>
     
                <TextField value={password} placeholder="Enter your password" 
                changeTextHandler={newText => setPassword(newText)}
                style = {{width: "90%", height: 50}} securyTextEntry = {invisible}/>

                    <TouchableOpacity onPress={() => { setInvisible(!invisible) }}>
                        <Entypo
                            name={invisible ? 'eye-with-line' : 'eye'}
                            type='material'
                            color='black'
                            size={25}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 1, width: "100%", backgroundColor: "#bfbfbf", }} />
            </View>

            <View style={{ marginTop: 50 }}>
                <SignInButton title="Sign  Up !"
                    onPressHandler={() => handleSignUp(fullName, email, password)}
                    // onPressHandler={() => setVisibleModal(true)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1, backgroundColor: "white", justifyContent: "center", paddingLeft: 30, paddingRight: 30,
    },
    welcomeTxt: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
    },
    inputHeader: {
        fontSize: 20,
        color: "#5b5b5c",
        fontWeight: "bold",
        marginTop: 30
    }, 
    modalView: {
        width: "100%", 
        height: "100%",  
        backgroundColor: "rgba(69,69,69,0.75)",
        alignItems: "center", 
        justifyContent: "center"
    }
})

export default SignUpScreen;