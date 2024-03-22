import {View, Text, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/homeScreen';
import MainScreen from '../screens/MainScreen';
function TabNaigation(){
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} tital='Home page' />
                <Tab.Screen name='Main' component={MainScreen} tital='Main page'/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TabNaigation