import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import lOGIN from './Ventana2';
import REGISTRO from './Registro';
import PRINCIPAL from './Main';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Login" component={lOGIN} />
          <Stack.Screen name="Register" component={REGISTRO} />
          <Stack.Screen name="Main" component={PRINCIPAL} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
