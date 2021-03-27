import React, { Component } from 'react';
import Box from './src/components/Box';
import { SafeAreaView , Platform } from 'react-native';
import Form from './src/components/Form';
import MainScreen from './src/screens/MainScreen';
import Filter from './src/components/Filter';
import { createStore } from 'redux';
import TestScreen from './src/screens/TestScreen';


// const store = createStore((state = 0 , action) => {
//   if (action.type === 'INCREASE') {
//     return state + 1;
//   }
//   return state;
// });

// console.log(store.getState());
// // Thay đổi store bằng cách gửi action
// store.dispatch({ type : 'INCREASE'});
// console.log(store.getState());


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1 , marginTop : Platform.OS === 'ios' ? 10 : 0}}>
        <TestScreen/>
      </SafeAreaView>
    );
  }
}
