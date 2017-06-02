import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './MainMenu';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="MainMenu" component={MainMenu} title="Main Menu"/>
    </Router>
  )
};

export default RouterComponent;
