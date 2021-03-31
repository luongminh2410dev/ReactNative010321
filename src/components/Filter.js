import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Filter extends Component {
  render() {
    const {filterMode, onValueFilterChange } = this.props
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          value = {filterMode}
          onValueChange={(value) => onValueFilterChange(value)}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  pickerStyle: {
    padding: 50,
  },
});