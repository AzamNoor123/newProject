import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

const BottomBox = (props) => {
    const {onPress} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Dont't have an account? <Pressable onPress={props.onPress}><Text style={styles.signuptxt}>Sign Up</Text></Pressable> </Text>  
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
        
        borderCurve: 'continuous',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        justifyContent:'center',
        marginTop:140
        
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