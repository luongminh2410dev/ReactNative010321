import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Child from './Child';

class Box extends Component {
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
          Count = {this.props.count}
        </Text>
        <Child 
          onInCrease={this.onInCrease}
          onDeCrease={this.onDeCrease}
          onReset={this.onReset}>
          </Child>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {count: state};
}

export default connect(mapStateToProps)(Box);