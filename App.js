import React, { Component } from 'react';
import Box from './src/components/Box';
import { SafeAreaView , Platform } from 'react-native';
import Form from './src/components/Form';
import MainScreen from './src/screens/MainScreen';
import Filter from './src/components/Filter';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1 , marginTop : Platform.OS === 'android' ? 10 : 0}}>
        <MainScreen/>
      </SafeAreaView>
    );
  }
}
