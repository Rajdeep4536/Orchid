import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const SignIn = ({navigation}) => {
  return (
   <View>
    <View>
      <Text>SignIn</Text>
    </View>
    <View>
     <Button title='click' onPress={()=> navigation.navigate('SignUp')}/>
     </View>
     </View>
  )
}
//const Stack = createNativeStackNavigator();

export default SignIn

const styles = StyleSheet.create({})