import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, ActivityIndicator, ToastAndroid } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SignInButton from '../components/SignInButton';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

const fetchUsers = async (username, password) => {

    Keyboard.dismiss();
    const response = await axios.get(`https://7985-93-88-93-8.ngrok.io/users?email=${username}&password=${password}`);
    return response.data;
}

const checkUser = async (username) => {
    const response = await axios.get(`https://7985-93-88-93-8.ngrok.io/users?email=${username}`);
    return response.data;
}

const SignInScreen = ({ navigation }) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invisible, setInvisible] = useState(true);
    const [visibleIndicator, setVisibleIndicator] = useState(false);

    const handleLogin = async (username, password) => {

        if (username == '' || password == '') {      
            Toast.showWithGravity("Fill all fields", Toast.SHORT, Toast.BOTTOM);
        }
        else {
            setVisibleIndicator(true);
            const users = await checkUser(username);

            if (users.length == 0) {
                Keyboard.dismiss();
                Toast.showWithGravity("Username not found", Toast.SHORT, Toast.BOTTOM);
            }
            else {
                const users2 = await fetchUsers(username, password);
                if (users2.length == 0) {
                    Toast.showWithGravity("Password is wrong!", Toast.SHORT, Toast.BOTTOM);
                }
                else {
                    Toast.showWithGravity("Login is successfull", Toast.SHORT, Toast.BOTTOM);
                }
            }
            setVisibleIndicator(false);
        }
    }

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

            <Text style={[styles.welcomeTxt, { marginTop: 60 }]}>Welcome</Text>
            <Text style={[styles.welcomeTxt, { marginTop: 5, }]}>back!</Text>
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput
                style={{ borderBottomColor: "#bfbfbf", borderBottomWidth: 1, marginTop: 5, height: 45}}
                color="black"
                fontSize={20}
                placeholder="Example@gmail.com"
                placeholderTextColor="#bfbfbf"
                
                onChangeText={newEmail => setUsername(newEmail)}
            />

            <Text style={styles.inputHeader}>Password</Text>
            <View>
                <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5,}}>
                    <TextInput
                        style={{ width: "90%", height: 45}}
                        color="black"
                        fontSize={20}
                        placeholder="Enter your password"
                        placeholderTextColor="#bfbfbf"
                        secureTextEntry={invisible}
                        onChangeText={newPassword => setPassword(newPassword)}
                    />
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
                <SignInButton title="Sign In !" onPressHandler={() => handleLogin(username, password)} />
            </View>

            <View style={{ marginTop: 40 }}>
                <ActivityIndicator size='large' color = "#ffa321" animating={visibleIndicator} />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1, 
        backgroundColor: "white", 
        justifyContent: "center", 
        paddingLeft: 30,
        paddingRight: 30,
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

export default SignInScreen;