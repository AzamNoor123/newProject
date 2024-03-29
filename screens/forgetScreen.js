import { View, Text, StyleSheet, Pressable, ScrollView, ActivityIndicator } from "react-native";
import InputField from "../components/inputField";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import AuthHelper from "../helper/AuthHelper";
const ForgetScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [loading,setLoading]=useState(false);
    const forgetbtnpressed=()=>{
        setLoading(true);
        AuthHelper.resetUserPasswd(email);
        setLoading(false);
    }
  
    return (
        <View>
            <LinearGradient colors={['#256BD5', '#F79708',]}
                style={styles.container}>
                <InputField placeHolder='Email address:' value={email} onChange={(t) => setEmail(t)} />
                {loading?<ActivityIndicator color={'#F79708'} size={'small'} />:<></>}

                <Pressable style={styles.pressable} onPress={() =>forgetbtnpressed()}>
                    <Text>Reset Password</Text>
                </Pressable>



            </LinearGradient>
        </View>
    )
}
export default ForgetScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        paddingTop: '50%'
    },
    pressable: {
        backgroundColor: '#1B69DF',
        height: '5%', width: '40%',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20
    }

})