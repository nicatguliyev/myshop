import React, {useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import MyStack from './MyStack';
import HomeScreen from './screens/HomeScreen';
import CarouselScreen from './screens/CarouselScreen';





const getData = async () => {
 
 const resp = await  axios.get("http://353f-93-88-93-8.ngrok.io/animals");

 return resp.data;
}


const App = () => {

  return (
    //  <WelcomeScreen />
      // <MyStack />
      <HomeScreen />
      // <CarouselScreen />
  );
}

export default App;