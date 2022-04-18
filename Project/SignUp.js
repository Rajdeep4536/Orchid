import { StyleSheet, Text, View, SafeAreaView, ScrollView,TextInput,TouchableOpacity,Alert,} from 'react-native'
import React, { useState } from "react";
import { Font } from 'react-native-paper/lib/typescript/types';
import CheckBox from '@react-native-community/checkbox';
//const validator = require('validator');

//const Stack = createNativeStackNavigator();
const Signup = ({navigation}) => {
 
  const[fullName, setFullName] =useState("");
  const[userName, setUserName] =useState(""); 
  const[email, setEmail]       =useState("");
  const[errorEmail, setErrorEmail]= useState(null)
  const[password, setPassword] =useState("");
  const[errorPassword, setErrorPassword] =useState(null);
  const [agree, setAgree]   =useState(false);
  
  const passwordValidate = password =>{
  var Regex = /^[@#](?=.{7,13}$)(?=\w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*\d)$/
  if (password==="" || password=== undefined || password===null ){
    setErrorPassword('Please enter password');
  }
  
  if (!Regex.test(password))
  {
   setErrorPassword("Please enter valid password");
  }
  else{setErrorPassword(null)};

   };




  //console.log(password)
  const submit = () => {

    if (!fullName || !userName || !password || !email ){
      Alert.alert('Please fill all the fields 🙄');
    }
    else{
      Alert.alert(' Thank You 😄 ')
     navigation.navigate("SignIn") ;
    }


    if (!errorEmail===null){
      Alert.alert('Please enter Email');
    }


  
   
  };

    return (
    

    <View>
    <SafeAreaView>
        <ScrollView>
        <View>
      <Text style={{marginLeft:22,margin:30,fontSize:40,fontWeight:'bold',color:'black',fontFamily:'Chalkduster',}}>Sign Up</Text>
      </View>
    <View>
    <Text style={styles.heading}>
        Full Name 
    </Text>
    <TextInput
     value={fullName} 
     onChangeText={(actualData) => setFullName(actualData)} 
     autoCorrect={true} placeholder='Enter Your Name' placeholderTextColor={'#404040'} style={styles.place}/>
    </View>
    <View>
    <Text style={styles.heading}>
    Email
    </Text>
    <TextInput 
     value={email} 
     onChangeText={(actualData) => setEmail(actualData)} 
     values={errorEmail} 
     onChangesText={(actualData) => setErrorEmail(actualData)}
     
     
    keyboardType="email-address" placeholder='Enter Your Email' placeholderTextColor={'#404040'} style={styles.place}/>
    </View>
    <View>
    <Text style={styles.heading}>
        Username
    </Text>
    <TextInput 
    value={userName} 
    onChangeText={(actualData) => setUserName(actualData)} 
    placeholder='Enter Your Username' placeholderTextColor={'#404040'} style={styles.place}/>
    </View>
    <View>
    <Text style={styles.heading}>
        Password
    </Text>
    <TextInput value={password} 
    onChangeText={(actualData) => setPassword(actualData)} 
    placeholder='Enter Your Password' secureTextEntry={true} 
    placeholderTextColor={'#404040'} style={styles.place} />
    </View>
    <View>
    <Text style={styles.heading}>
        Confirm Password
    </Text>
    <TextInput placeholder='Re-Enter Your Password' placeholderTextColor={'#404040'} style={styles.place} secureTextEntry={true}/>
    </View>
    <View style={{flexDirection:'row'}}>
    <View>
    <CheckBox style={{marginLeft:20}}
   // disabled={false}
    value={agree}
    onValueChange={() => setAgree(!agree)}
    
  />
  </View>
  <View style={{flexDirection:"row",alignSelf:'center',}}>
   <Text style={{fontSize:18,paddingLeft:20 }}>
       I agree to the
   </Text>
  <Text style={{fontWeight:'bold', fontSize:18, paddingLeft:8}}>
    Terms of User
  </Text>
   </View>
   </View>
   
  
  <View style={{flexDirection:'row',}}>
   <TouchableOpacity onPress={submit}  disabled ={!agree}>
    <View style={{margin:30,borderWidth:1,padding:9,paddingHorizontal:35,borderRadius:6,backgroundColor:'#4d0026',}}>
      <Text style={{color:'white',fontWeight:'bold'}}>
          Sign Up
      </Text>
     
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Sign In')}>
      <View style={{marginLeft:88,marginVertical:38}}>
      <Text style={{fontWeight:'bold',color:'black',fontSize:17,}}>
          Sign in --&gt;
      </Text>
      </View>
      </TouchableOpacity>
  </View>
    
    
  </ScrollView>
  </SafeAreaView>
    </View>


  )
  }


export default Signup

const styles = StyleSheet.create({

heading:{
fontSize:19,
marginLeft:20,
fontWeight:'bold',
color:'black',
fontFamily:'NoteWorthy-Bold',
fontWeight:'bold',
},

place:{
fontSize:18,
marginRight:25,
marginLeft:22,
margin:20,
borderBottomWidth:2,
borderBottomColor:'#4d0026',
paddingBottom:10,
},
checkbox:{
marginLeft:18,
boxType:'square',
onTintColor:'black',
marginTop:10,




}




















})