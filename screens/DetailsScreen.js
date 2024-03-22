import {View, Text,StyleSheet , Image,Pressable} from 'react-native'
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import WhiteCard from '../components/whiteCard';
import Ingredients from '../components/IngredientsDetail';
import Recipe from '../components/Recipe';

const DetailScreen=()=>{
    const [btnClr ,setbtnClr]=useState(true);
    return(
        <View>
            <LinearGradient  colors={['#256BD5', '#F79708',]} style={styles.container} >
                <Image style={styles.image1} source={require('../assets/detail1.png')}/>
                <WhiteCard />
                <View style={styles.buttonView}>
                    <Pressable style={btnClr===false?styles.button:styles.bluebtn} onPress={()=>{setbtnClr(true)}}><Text>Ingredients</Text></Pressable> 
                    <Pressable style={btnClr===true?styles.button:styles.bluebtn} onPress={()=>{setbtnClr(false)}}><Text>Recipe</Text></Pressable>
                </View>
              {btnClr==true? <Ingredients/>:<Recipe/>} 


            </LinearGradient>

        </View>
    )
}
export default DetailScreen
const  styles = StyleSheet.create({
    container:{
        height: '100%',
    width: '100%',
    },
    image1:{
        height: 250,
        width:'100%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        
    },
    button:{
        width:110,
        height:30,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        borderRadius:20,
        
    },
    buttonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:20,
    },
    bluebtn:{
        width:110,
        height:30,
        backgroundColor:'#1B69DF',
        alignItems:'center',
        borderRadius:20,
        
    }
})