import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';  
import PropTypes from 'prop-types'
export default class Form extends Component {
  static propTypes = {
    shouldShowForm: PropTypes.bool,
    ontoggleForm: PropTypes.func.isRequired,
  }
  static defaultProps = {
    shouldShowForm: false,
  }
  constructor(props)
  {
    super(props);
    this.state = {
      txtEn: '',
      txtVn: '',
    }
  }
  addWord = () => {
    const {txtEn, txtVn} = this.state;
        if(txtEn.length <= 0 || txtVn.length <= 0)
        {
            return alert('Ban phai nhap day du thong tin')
        }
        const newWord = {
            id: Math.random(),
            en : txtEn,
            vn: txtVn,
            isMemorized: false,
        }
        this.props.onaddWord(newWord, () =>{
          this.setState({txtEn: '', txtVn: ''});
          this.textInputEn.clear();
          this.textInputVn.clear();
        })
  }
  renderForm = (shouldShowForm) => {
    const {ontoggleForm} = this.props;
    if (shouldShowForm) {
      return (
        <View>
          <View style={styles.containerTextInput}>
              <TextInput
                  onChangeText={(text) => (this.state.txtEn = text)}
                  placeholder="English"
                  style={styles.textInput}
                  ref={(refs) => (this.textInputEn = refs)}
              />
              <TextInput
                  onChangeText={(text) => (this.state.txtVn = text)}
                  placeholder="Vietnamese"
                  style={styles.textInput}
                  ref={(refs) => (this.textInputVn = refs)}
              />
          </View>
          <View style={styles.containerTouchable}>
              <TouchableOpacity 
                  onPress={this.addWord}
                  style={styles.touchableAddword}>
                  <Text style={styles.textTouchable}>Add word</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={ontoggleForm}
                  style={styles.touchableCancel}>
                  <Text style={styles.textTouchable}>Cancel</Text>
              </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
          <TouchableOpacity
              onPress={ontoggleForm}
              style={styles.buttonOpenForm}>
              <Text style={styles.textOpenForm}>+</Text>
          </TouchableOpacity>
      );
    }
  }
  render() {
    const {shouldShowForm} = this.props;
    return this.renderForm(shouldShowForm);
  }
}

const styles = StyleSheet.create({
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  textInput: {
    borderWidth: 1,
    height: 60,
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  touchableAddword: {
    backgroundColor: '#218838',
    padding: 15,
    borderRadius: 10,
  },
  textTouchable: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  touchableCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonOpenForm: {
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#45B157',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOpenForm: {
    color: 'white',
    fontSize: 30,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});