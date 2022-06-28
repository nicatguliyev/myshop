import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import SignInButton from '../components/SignInButton';
import axios from 'axios';
import TextField from '../components/TextField';


const registerUser = async (fullname, email, password) => {
    const repsonse = await axios.post('http://7985-93-88-93-8.ngrok.io/users', {
        fullName: fullname,
        email: email,
        password: password
    }).then((resp) => console.log(resp.data)).catch((err) => console.log(err));
}

const SignUpScreen = ({ navigation }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invisible, setInvisible] = useState(true);
    const [visibleIndicator, setVisibleIndicator] = useState(false);

    return (
        <View style={styles.constainer}>
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
            style = {{ borderBottomColor: "#bfbfbf", borderBottomWidth: 1} }/>

            <Text style={styles.inputHeader}>Email</Text>
            <TextField value={email} placeholder="Example@gmail.com"
             changeTextHandler={newText => setEmail(newText)} 
             style = {{ borderBottomColor: "#bfbfbf", borderBottomWidth: 1} }/>


            <Text style={styles.inputHeader}>Create password</Text>
            <View>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
     
                <TextField value={password} placeholder="Enter your password" 
                changeTextHandler={newText => setPassword(newText)}
                style = {{width: "90%"}} securyTextEntry = {invisible}/>

                    <TouchableOpacity onPress={() => { setInvisible(!invisible) }}>
                        <Entypo
                            name={invisible ? 'eye-with-line' : 'eye'}
                            type='material'
                            color='black'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 1, width: "100%", backgroundColor: "#bfbfbf", }} />
            </View>

            <View style={{ marginTop: 50 }}>
                <SignInButton title="Sign  Up !"
                    onPressHandler={() => registerUser(fullName, email, password)}
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
    }
})

export default SignUpScreen;