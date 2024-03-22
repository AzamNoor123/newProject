import {View, Text, StyleSheet} from 'react-native'
const Ingredients=()=>{
    return(
        <View>
            <Text style={styles.dough}>
            For the Dough:
            </Text>
            <Text style={styles.details}>
            1-1/2 cups (180 grams) bread flour{'/n'}
1/2 teaspoon (3 grams) active dry yeast
1 teaspoon (5 grams) granulated sugar
1 teaspoon (5 grams) kosher salt
1 tablespoon (15 ml) olive oil
3/4 cup (180 ml) warm water
            </Text>
        </View>
    )
}
export default Ingredients
const  styles= StyleSheet.create({
    dough:{
        fontSize:15,
        marginHorizontal:20

    },
    details:{
        margin:20,
        paddingHorizontal:20,
        fontSize:15
        
    }

})