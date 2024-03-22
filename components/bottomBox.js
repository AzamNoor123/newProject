import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

const BottomBox = ({props}) => {
    const {move}=props
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Dont't have an account? <Pressable onPress={props.move}><Text style={styles.signuptxt}>Sign Up</Text></Pressable> </Text>  
        </View>
    )
}
export default BottomBox
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#1B69DF',
        alignSelf: "center",
        marginTop: 135,
        borderCurve: 'continuous',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        justifyContent:'center'
        
    },
    text: {
        alignSelf: 'center',
        paddingTop: 20,
        color: 'white'
    },
    signuptxt:{
        color:'#F79708'
    }

}
)