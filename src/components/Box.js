import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // increase = () => {
  //   this.setState({count: this.state.count + 1}, () => {
  //     console.log(this.state.count);
  //   });
  // };
  onInCrease = () =>
  {
    this.setState({count: this.state.count + 1})
  }
  onDeCrease = () =>
  {
    this.setState({count: this.state.count - 1})
  }
  onReset = () =>
  {
    this.setState({count: this.state.count = 0})
  }
  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
            fontSize: 20,
            marginBottom: 10,
          }}>
          Count = {this.state.count}
        </Text>
        <Child 
          onInCrease={this.onInCrease}
          onDeCrease={this.onDeCrease}>
          onReset={this.onReset}
          </Child>
      </View>
    );
  }
}