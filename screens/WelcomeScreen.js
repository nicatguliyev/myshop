import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const WelcomeScreen  = ({navigation}) => {

    return (
      <View style = {styles.container}>
           <Text style = {styles.welcomeTxt}>Welcome!</Text>
           <Text style = {styles.infoTxt}>Sign in  or create new account</Text>
           <Image style = {styles.image} source = {require('../assets/shopping.webp')} />
           <TouchableOpacity style = {styles.signInBtn} activeOpacity = {0.6}  onPress = {() => navigation.navigate("SignInScreen")}>
               <View>
                   <Text style = {{color: "white", fontWeight: "bold", fontSize: 16}}>Go to Sign In</Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity style = {styles.signUpBtn} activeOpacity = {0.2} onPress = {() => navigation.navigate("SignUpScreen")} >
               <View style = {{flexDirection: "row",}}>
                   <Text style = {{color: "black", fontWeight: "bold", fontSize: 16}}>Not account yet?</Text>
                   <Text style = {{color: "#ffa321", fontWeight: "bold", fontSize: 16}}>  Sign up</Text>
               </View>
           </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
    },
    welcomeTxt: {
        color: "black",
        fontWeight: "bold",
        fontSize: 45
    },
    infoTxt: {
        color: "#bfbfbf",
        fontSize: 17,
        marginTop: 10,
    },
    image: {
        width: "80%",
        height: 300,
        marginTop: 20,
        marginHorizontal: 100,
    },
    signInBtn: {
        width: "80%",
        height: 60,
        backgroundColor: "#ffa321",
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpBtn: {
        width: "80%",
        height: 60,
        backgroundColor: "#ffffff",
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#bfbfbf"
    }
});

export default WelcomeScreen;
