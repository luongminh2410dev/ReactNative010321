import React, { Component } from 'react';
import { SafeAreaView , Platform } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { Provider } from 'react-redux'
import store from './src/redux/store';

// console.log(store.getState());
// // Thay đổi store bằng cách gửi action
// store.dispatch({ type : 'INCREASE'});
// console.log(store.getState());

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1 , marginTop : Platform.OS === 'ios' ? 10 : 0}}>
        <Provider store={store}>
          <MainScreen/>
        </Provider>
      </SafeAreaView>
    );
  }
}
 
  
  

  