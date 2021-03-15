import React, { Component } from 'react'
import { Text, View,SafeAreaView} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView 
        style = {{
          flex: 1, 
          flexDirection: 'column',
          alignItems: 'stretch'
        }}>

        <View 
          style={{
            flex: 1,
            flexDirection: 'column'
        }}>
          <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
            <Text>A</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
            <Text>B</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Text>C</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
            <Text>D</Text>
          </View>
        </View>

        <View 
          style={{
            flex: 1,
            flexDirection: 'row'
        }}>
          <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
            <Text>A</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
            <Text>B</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
            <Text>C</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
            <Text>D</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
