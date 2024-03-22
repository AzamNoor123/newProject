import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const InputField=(props)=>{
    const {placeHolder, value} = props
    return(
        <TextInput style={styles.input } placeholder={props.placeHolder} placeholderTextColor={'white'} value={value} onChange={(t)=>console.log(t)}  />
    )
}
export default  InputField;
const styles= StyleSheet.create({
    input:{
       margin:10,
    //    borderColor:'yellow',
       fontSize:18,
       height:30,
       width:288,
       alignSelf:"center",
    //    borderWidth:1,
       color:'white',
       borderColor:'white',
    //    borderRadius:10,
       marginTop:20,
       borderBottomWidth:1
       



    }

})