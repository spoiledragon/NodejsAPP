import React, { Component } from 'react';
import {NavigationContext} from '@react-navigation/native';
import { View, Text } from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Main </Text>
      </View>
    );
  }
}
