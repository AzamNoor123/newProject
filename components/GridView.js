import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
const GridData=[
    {id:1, title:'Classic Pizza', src:require('../assets/pizza1.png')},
    {id:2, title:'Deep Dish', src:require('../assets/pizza2.png')},
    {id:3, title:'Pen  Pizza', src:require('../assets/pizza3.png')},
    {id:4, title:'Stuffed Crust', src:require('../assets/pizza4.png')},
    {id:5, title:'Stuffed Crust', src:require('../assets/pizza4.png')},
    {id:6, title:'Stuffed Crust', src:require('../assets/pizza4.png')},
    {id:7, title:'Stuffed Crust', src:require('../assets/pizza4.png')},
]
const GridList=({})=>{
    const navigation=useNavigation();
    return(
        
        <FlatList numColumns={2}
        data={GridData}
        renderItem={({item})=><View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
           
            <Image source={item.src}/>
            <Text style={styles.text} >{item.title}</Text>
            </TouchableOpacity>
        </View>}
        keyExtractor={(item)=>item.id}
        />
       

        
    )
}
export default GridList


const styles=StyleSheet.create({
    container:{
        width:'40%',
        height:150,
        backgroundColor:'white',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20, 
        borderRadius:20,
        paddingTop:20,
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        paddingTop:20,
        paddingLeft:10,
    }
})