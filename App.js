import React, { Component } from 'react'
import { Text, View,SafeAreaView, StyleSheet} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView 
        style={styles.container}>
        {/* <View 
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
        </View>  */}
        {/* <View style={{backgroundColor: 'red',flex: 2,justifyContent: 'center', alignItems: 'center',borderWidth: 4, borderColor: '#a9a9a9'}}>
          <Text style={{color: 'while'}}>1</Text>
        </View>
        <View style={{flex: 8, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'yellow', flex: 3,justifyContent: 'center', alignItems: 'center',borderWidth: 4, borderColor: '#a9a9a9'}}>
            <Text>2</Text>
          </View>
          <View style={{flex: 6,flexDirection: 'column'}}>
            <View style={{backgroundColor: 'blue', flex: 4,justifyContent: 'center', alignItems: 'center',borderWidth: 4, borderColor: '#a9a9a9'}}>
              <Text>3</Text>
            </View>
            <View style={{flexDirection: 'row', flex: 2}}>
              <View style={{backgroundColor: 'pink', flex: 1.1,justifyContent: 'center', alignItems: 'center',borderWidth: 4, borderColor: '#a9a9a9'}}>
                <Text>4</Text>
              </View>
              <View style={{backgroundColor: 'purple', flex: 0.9,justifyContent: 'center', alignItems: 'center',borderWidth: 4, borderColor: '#a9a9a9'}}>
                <Text>5</Text>
              </View>
            </View>
          </View>
        </View> */}
        <View style={{flexDirection: 'row',flex: 2}}>
          <View style={{backgroundColor: 'red',flex: 0.5,justifyContent: 'center', alignItems: 'center',borderWidth: 2, borderColor: '#a9a9a9'}}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={{backgroundColor: 'yellow',flex: 1.5,justifyContent: 'center', alignItems: 'center',borderWidth: 2, borderColor: '#a9a9a9'}}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',flex: 5}}>
          <View style={{flex: 4,flexDirection: 'column'}}>
            <View style={{backgroundColor: 'green',flex: 1.8,justifyContent: 'center', alignItems: 'center',borderWidth: 2, borderColor: '#a9a9a9'}}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={{backgroundColor: 'purple',flex: 2.2,justifyContent: 'center', alignItems: 'center',borderWidth: 2, borderColor: '#a9a9a9'}}>
              <Text style={styles.text}>4</Text>
            </View>
          </View>
          <View style={{backgroundColor: 'gray',flex: 1,justifyContent: 'center', alignItems: 'center',borderWidth: 2, borderColor: '#a9a9a9'}}>
              <Text style={styles.text}>5</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',flex: 3}}>
          <View style={{backgroundColor: 'orange',flex: 1,justifyContent: 'center', alignItems: 'center',borderWidth: 2, borderColor: '#a9a9a9'}}>
              <Text style={styles.text}>6</Text>
          </View>
          <View style={{backgroundColor: 'blue',flex: 1,justifyContent: 'center', alignItems: 'center',borderWidth: 2, borderColor: '#a9a9a9'}}>
              <Text style={styles.text}>7</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10, 
    flexDirection: 'column',    
    alignItems: 'stretch'
  },
  text : {
    color: 'white',
    fontSize: 20
  }
})

