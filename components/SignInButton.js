import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import axios  from 'axios';

const SignInButton  = ({title, onPressHandler}) => {

    return(
        <TouchableOpacity style = {styles.signInBtn} activeOpacity = {0.6} onPress = {onPressHandler}>
        <View>
            <Text style = {{color: "white", fontWeight: "bold", fontSize: 16}}>{title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    signInBtn: {
        width: "100%",
        height: 60,
        backgroundColor: "#ffa321",
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SignInButton;