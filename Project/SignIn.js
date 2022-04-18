import { StyleSheet, Text, View ,Button,TextInput,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const SignIn = ({navigation}) => {
  return (
   <View style={{backgroundColor:'#fff8dc'}}>
    <View>
      <Text style={{fontSize:38,fontWeight:"bold",marginTop:90,marginLeft:10, color:'black', fontFamily:'Chalkduster'}}>Welcome back,</Text>
    </View>
    <View>
      <Text  style={{fontSize:38,fontWeight:'bold',marginLeft:10,color:'black', fontFamily:'Chalkduster',}} >
       Beautiful 
      </Text>
    </View>
    <View>
    <TextInput placeholder='Email address or Number' placeholderTextColor={'#808080'}  style={{marginTop:80,marginBottom:40,borderBottomWidth:1,color:'#808080',margin:10,fontSize:17,paddingBottom:14}}/>
    </View>
    <View>
    <TextInput placeholder='Password' placeholderTextColor={`#808080`} secureTextEntry={true}  style={{borderBottomWidth:1,color:'#808080',margin:10,paddingBottom:14,fontSize:17,}}/>
    </View>

    <View style={{flexDirection:'row',marginTop:270,}}>
     <View>
       <Text style={{marginTop:19,paddingRight:170,marginLeft:29}}>
         Forgot password?
       </Text>
     </View>
     <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
     <View>
     <Image style={{height:50,width:50,}} source={require('/Users/mobiloitte/Orchid/arrow-icon.webp')} />
     </View>
     </TouchableOpacity>
    </View>
    

     </View>
  )
}
//const Stack = createNativeStackNavigator();

export default SignIn

const styles = StyleSheet.create({})