import { StyleSheet, Text, View } from 'react-native';

const CustomCmponent=(props)=> {
    const {title, name}= props
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <Text> {props.name}</Text>
      <Text style={styles.text}>This is custm</Text>
      
      
    </View>
  );
}
export default CustomCmponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{ color:'black',
  fontSize:20,
  flex:1
}
});