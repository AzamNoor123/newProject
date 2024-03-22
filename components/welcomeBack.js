import {View, Text, StyleSheet} from 'react-native'
const WelcomeBack=(props) =>{
    return(
        <View style={styles.welcome}>
            <Text style={styles.text}>
                Welcome {'\n'} Back
            </Text>
        </View>
    )
}
export default WelcomeBack; 
const styles=StyleSheet.create({
    welcome: {
        backgroundColor:'#FFFFFF',
        height:100,
        width:300,
        // borderTopRightRadius:30,
        // borderBottomRightRadius:30,
        marginTop:50,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        marginBottom:80
    },
    text:{
        color:'#F79708',
        fontSize:36,
        // fontFamily:'Open Sans',
        fontWeight:'bold',
        marginLeft:20,
        
    }
   
})