import { View, Text, Button, StyleSheet, Image, Pressable , ScrollView, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/inputField';
import SubmitButton from '../components/submitButton';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthHelper from '../helper/AuthHelper';


const HomeScreen = ({ navigation }) => {
  const [email, setemail] = useState();
  const [passwd, setpasswd] = useState();
  const [Fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [loading, setLoading]=useState(false);
  const btnpress=async()=>{
    setLoading(true);
    await AuthHelper.addUserData(Fname, Lname,email);
   await AuthHelper.CreateUser(email, passwd);
    setLoading(false);
  }
  

  return (
    <View style={styles.container}>
      
      <LinearGradient
        colors={['#256BD5', '#F79708',]}
        style={styles.container}>
          <ScrollView>
        <Image source={require('../assets/Vector.png')} style={styles.image} />
        <InputField placeHolder="First name:" value={Fname} onChange={(t) => { setFname(t) }}/>
        <InputField placeHolder="Last name:" value={Lname} onChange={(t) => { setLname(t) }}/> 
        <InputField placeHolder="Eamil address:" value={email} onChange={(t) => { setemail(t) }} />
        <InputField placeHolder="password:" value={passwd} onChange={(t) => { setpasswd(t) }} />
        {loading?<ActivityIndicator color={'#F79708'} size={'large'} />:<></>}

        <SubmitButton btntitle=' Sign Up' btnpress={() => btnpress() } />
        <Text style={styles.signupwith}>Sign up with</Text>
        <Text style={styles.signupwith}> Alraedy have an account? <Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.pressable}>Sign In</Text></Pressable></Text>




        {/* <Button
          title="Go to login"
          onPress={() => navigation.navigate('Login')}
        /> */}
        </ScrollView>

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
    width: 106,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30
  },
  signupwith: {
    color: 'white',
    alignSelf: 'center',

  },
  pressable: {
    color: "#1B69DF",
    fontWeight: 'bold'
  }
}
)
