import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from '../Orchid/Project/SignUp'
//import Demo from '../Sunflower/Project/Demo'
import SignIn from '../Orchid/Project/SignIn'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//import SplashScreen from 'react-native-splash-screen'
//import { useEffect } from 'react/cjs/react.production.min';
//import React, { useEffect, ReactElement } from 'react';
//import Router from 'next/router';

const App = () => {



  return (


    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
    </Stack.Navigator>
   </NavigationContainer>

  


   


   
  )
}

export default App

const styles = StyleSheet.create({})