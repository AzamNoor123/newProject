import { View, Text, StyleSheet , ScrollView, SafeAreaView} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { SearchBar } from "../components/SearchBar"
import GridList from "../components/GridView"





const MainScreen=()=>{
    return(
        

        <View> 
            <LinearGradient
      colors={['#256BD5', '#F79708', ]}
        style={styles.container}
      >
        <SearchBar/>
            
            <GridList/>
           
           
          
            </LinearGradient>
            
        </View>
       
    )
}
export default MainScreen

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        paddingTop:30,
        

    },
    searchbar:{
        borderRadius:20,
        borderColor:'#FFFFFF'
    }
})