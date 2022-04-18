import { StyleSheet, Text, View,ScrollView,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    const Flex = () => {}

  return (
<View>
    <SafeAreaView>
      <ScrollView>  
         <View>
         <View style={{Flex:1,backgroundColor:'blue',flexDirection:'column', paddingBottom:90,}} >   
           <Text style={{fontSize:20,fontWeight:'700',marginLeft:30,color:'white',}}>Period Tracker</Text>
         </View>
         <View style={{margin:30,}}>
             <Image source={require('/Users/mobiloitte/Orchid/clock2.webp')} style={{height:70,width:70,borderRadius:90}}/>
         </View>
         </View>
     </ScrollView>
    </SafeAreaView>
</View>
  ) 
}

export default Home

const styles = StyleSheet.create({})