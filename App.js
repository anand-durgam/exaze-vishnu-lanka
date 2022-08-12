import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import FirstScreen from './src/FirstScreen';
import SecondScreen from './src/SecondScreen';
import ThirdScreen from './src/ThirdScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={Store}> 
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})