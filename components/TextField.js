import React from "react";
import {TextInput, StyleSheet} from 'react-native';

const TextField = ({value, placeholder, changeTextHandler, style, securyTextEntry})  => {
    
    return (
        <TextInput
        style={style}
        color="black"
        fontSize={20}
        placeholder={placeholder}
        placeholderTextColor="#bfbfbf"
        onChangeText={changeTextHandler}
        secureTextEntry = {securyTextEntry}
        value={value}
    />
    );
}

export default TextField;

// { borderBottomColor: "#bfbfbf", borderBottomWidth: 1 }