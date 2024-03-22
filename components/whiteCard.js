import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
const GroupList = [{ id: 1, src: require('../assets/Group3.png'), text: 'Easy' }, { id: 2, src: require('../assets/Group1.png'), text: '20 min' }, { id: 3, src: require('../assets/Group2.png'), text: '520 cal' },]
const WhiteCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingCard}>
                Classic Pizza
            </Text>
            <Text style={styles.cardText}> New York style pizza is famous for large,
             foldable slice with its cripsy crust. </Text>
             <FlatList data={GroupList}
             renderItem={({item})=><View style={styles.groupList}>
                <Image source={item.src} style={styles.groupListImage}/>
                <Text style={styles.groupListText}>{item.text}</Text>
             </View>} horizontal={true} style={styles.flatlist}/>

        </View>
    )

}
export default WhiteCard;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 150,
        width: 300,
        alignSelf: "center",
        borderRadius: 20,
        // position: "relative",
        marginTop: '-20%'
    },
    headingCard: {
        alignSelf: 'center',
        fontSize: 32,
        fontWeight: 'bold',

    },
    cardText: {
        margin: 5,
        fontSize: 14,
        alignSelf: 'center'

    },
    groupList:{
        flexDirection:'row',
        
    },
    groupListImage:{
        height:15,
        width:15,
        marginHorizontal:20,
        marginLeft:1
        
        
    },
    groupListText:{
        marginRight:1,
        paddingLeft:-10,
        paddingRight:10
    },
    flatlist:{
        alignSelf:'center',
        paddingHorizontal:40
    }
})