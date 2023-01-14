import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login/Login';
import Cadastro from './screens/Cadastro/Cadastro';
import Principal from './screens/Principal/Principal';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

