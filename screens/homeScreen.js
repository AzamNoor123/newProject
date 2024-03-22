import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/inputField';
import SubmitButton from '../components/submitButton';
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#256BD5', '#F79708',]}
        style={styles.container}>
        <Image source={require('../assets/Vector.png')} style={styles.image} />
        <InputField placeHolder="First name:" />
        <InputField placeHolder="Last name:" />
        <InputField placeHolder="Eamil address:" />
        <InputField placeHolder="password:" />

        <SubmitButton btntitle=' Sign Up' btnpress={()=>{navigation.navigate('Login')}}/>
        <Text style={styles.signupwith}>Sign up with</Text>
        <Text style={styles.signupwith}> Alraedy have an account? <Pressable onPress={()=>navigation.navigate('Login')}><Text style={styles.pressable}>Sign In</Text></Pressable></Text>
        



        {/* <Button
          title="Go to login"
          onPress={() => navigation.navigate('Login')}
        /> */}

      </LinearGradient>

    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {

    height: '100%',
    width: '100%',
    // backgroundImage: linear-gradient('#256BD5' ,'#F79708' )
  },


  image: {
    height: 106,
    width:106,
    alignSelf:'center',
    marginTop:50,
    marginBottom:30
  },
  signupwith:{
    color:'white',
    alignSelf:'center',
    
  },
  pressable:{
    color:"#1B69DF",
    fontWeight:'bold'
  }
}
)
