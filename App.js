import React, { Component } from 'react'
import { Text, View } from 'react-native'
// phai import MainScreen de render ra App.js
import MainScreen from './src/screens/MainScreen'
export default class App extends Component {
  render() {
    // Chi tra ra MainScreen
    return <MainScreen/>
  }
}
