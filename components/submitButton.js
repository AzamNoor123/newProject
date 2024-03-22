import {View, Text, Button, StyleSheet, Pressable} from  'react-native'
const SubmitButton=(props)=>{
    const {btntitle, btnpress}=props
    return(
        <View  >
        <Pressable style={styles.button} onPress={btnpress} >

            <Text style={styles.btntxt}> {props.btntitle}</Text>
        </Pressable>
        </View>
    )
}
export default SubmitButton

const styles=StyleSheet.create({
    button:{
        width:200,
        height:40,
        margin:20,
        backgroundColor:'white',
        alignSelf: "center",
        borderRadius:30,
        


    },
    btntxt:{
        alignSelf:'center',
        fontWeight: 'bold',
        paddingTop:5,
        paddingRight:10
    }

}

)