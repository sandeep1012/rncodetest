import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home' 
import Productdetail from './src/pages/Home/Productdetail';
const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation:'slide_from_bottom'}}>              
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="Productdetail" component={Productdetail} options={{ title: 'Product detail' }}/>
      </Stack.Navigator>
  </NavigationContainer>

);

export default App;
