import { View, Text , Button, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import InputField from '../components/inputField'
import SubmitButton from '../components/submitButton'
import WelcomeBack from '../components/welcomeBack'
import BottomBox from '../components/bottomBox'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthHelper from '../helper/AuthHelper'

const LoginScreen = ({navigation}) => {
  const auth=getAuth();
  const  [email, setEmail] = useState("");
  const [password, setPassword]=useState("");
  const [loading, setLoading] = useState(false)
  const signinpressed=async()=>{
    setLoading(true);
   await AuthHelper.signinUser(email,password);
   navigation.navigate('Main');
    setLoading(false);
  }





  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#256BD5', '#F79708', ]}
        style={styles.container}
      >
       
      <WelcomeBack/>
      

      <InputField  placeHolder ='Email address:' value={email} onChange={(t)=>setEmail(t)}/>
      <InputField  placeHolder ='Password:' value={password} onChange={(t)=>setPassword(t)} secureTextEntry />
      
      {loading?<ActivityIndicator color={'#F79708'} size={'large'} />:<></>}
      <SubmitButton btntitle ='Sign In' btnpress={()=> signinpressed()
        
         } />
      <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
        <Text style={styles.forget}> forget password?</Text>
      </TouchableOpacity>
      <BottomBox  onPress={()=>navigation.navigate('Home')}/>
      </LinearGradient>
      
    </View>
  )
  
}

export default LoginScreen
const styles=StyleSheet.create({
    container:{
        // backgroundColor:'red',
        height:'100%',
        width:'100%',

        
        
    },
    forget:{
      color: '#1B69DF',
      position:"absolute",
      marginLeft:'60%',
      fontSize:15,
      fontWeight:'bold'
    }
})
