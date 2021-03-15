import React, { Component } from 'react'
import { Text, View,SafeAreaView, StyleSheet} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView 
        style={styles.container}>
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
          <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
            <Text>A</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
            <Text>B</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center'}}>
            <Text>C</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
            <Text>D</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'stretch'
  }
})