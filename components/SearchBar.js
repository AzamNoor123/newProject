import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import DispData from './FlatlistRow'

export class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.searchbar} placeholder='Sraech' placeholderTextColor={color = 'white'} />
                <DispData/>
                <Text style={styles.getReady}> Ready to Bake?</Text>
                <Text style={styles.getRolling}> Lets Get Rolling</Text>
            </View>
        )
    }
}

export default SearchBar
const styles = StyleSheet.create({
    container:{ margin:5,
    padding:5},
    searchbar: {
        width: '88%',
        height: 40,
        color: 'red',
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        paddingLeft: 10,
        borderColor: 'white'
    },
    getReady:{
        color:'#EC9413',
        fontSize:30,

    },
    getRolling:{
        color:'#FFC107',
        fontSize:15,


    }
})