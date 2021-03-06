import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="JayCad" />
        <Router />
      </View>
    );
  }
}

export default App;
