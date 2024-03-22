import { View, Text , Button, StyleSheet} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import InputField from '../components/inputField'
import SubmitButton from '../components/submitButton'
import WelcomeBack from '../components/welcomeBack'
import BottomBox from '../components/bottomBox'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#256BD5', '#F79708', ]}
        style={styles.container}
      >
       
      <WelcomeBack/>
      

      <InputField  placeHolder ='Email address:'/>
      <InputField  placeHolder ='Password:'/>
      <SubmitButton btntitle ='Sign In' btnpress={()=> navigation.navigate('Main')} />
      <BottomBox />
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
        
    }
})