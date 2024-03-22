
import { Text, View, Image, StyleSheet } from 'react-native'

 const SignupOptions=(props)=> {
    const {srcc}=props
    return (
      <View>
        <Image style={styles.boximage} source={require('../assets/fb.png')} /> 
        <Image style={styles.boximage} source={require('../assets/google.png')} /> 
      </View>
    )
  }


export default SignupOptions

const  styles = StyleSheet.create({
    boximage:{
        height:30,
        width:30,
        marginLeft:100,
    }

})
