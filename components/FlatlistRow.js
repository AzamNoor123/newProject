import { Text, View, FlatList, StyleSheet , ScrollView} from "react-native";
const DataList = [
    { title: 'Cust', id: 'id 1' },
    { title: 'Sauce', id: 'id 2' },
    { title: 'Toopings', id: 'id 5' },
    { title: 'Regional', id: 'id 3' },
    { title: 'Classic', id: 'id 4' },

]
const DispData=()=>{
    return(
        
        <FlatList horizontal={true}
        data={DataList}
        renderItem={({item})=><Text style={styles.item}>{item.title}</Text>}
        keyExtractor={(item)=>item.id}
        />
       

        
    )
}
export default DispData
const styles=StyleSheet.create({
    item:{
        backgroundColor:'#EC9413',
        width:100,
        padding:8,
        paddingLeft:20,
        margin:10,
        borderColor:'white',
        borderWidth:1,
        alignItems:'center',
        fontSize:15,
        borderRadius:20,
        color:'white', 
        height:40
        
        
    }

})