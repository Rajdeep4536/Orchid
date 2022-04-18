import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from './Project/SignUp';
import SignIn from './Project/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

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