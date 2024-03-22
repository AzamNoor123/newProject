import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailsScreen';

 function StackNavigation(){
    const  Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} options ={{headerShown:false}}/>
        <Stack.Screen name='Main' component={MainScreen}  options={{headerShown:false}}/>
        <Stack.Screen name='Detail' component={DetailScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
  
      </NavigationContainer>

    )
 }
 export default  StackNavigation;