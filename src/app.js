import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import { MainMenu } from './components';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="JayCad" />
        <MainMenu />
      </View>
    );
  }
}

export default App;
