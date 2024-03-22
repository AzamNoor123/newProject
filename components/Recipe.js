import {View, Text, StyleSheet} from 'react-native'
const Recipe=()=>{
    return(
        <View>
            <Text style={styles.dough}>
            For the Recipe:
            </Text>
            <Text style={styles.details}>
            In a large bowl, combine the flour, yeast, and 
      sugar. Whisk to distribute.
Add the salt and olive oil. Stir with a fork until a 
      shaggy dough forms.
Gradually add the warm water, mixing until a
      soft dough comes together.
Knead the dough on a lightly floured surface
      for 5-7 minutes, until smooth and elastic.
Form the dough into a ball, place it in a
      greased bowl, and cover with plastic wrap.
Let the dough rise at room temperature for 
      1-2 hours, or until doubled in size.
            </Text>
        </View>
    )
}
export default Recipe
const  styles= StyleSheet.create({
    dough:{
        fontSize:15,
        marginHorizontal:20,
        color:'white'

    },
    details:{
        margin:20,
        paddingHorizontal:20,
        fontSize:15,
        color:'black'
        
    }

})