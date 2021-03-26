import React, { Component } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import screenDimension from '../helpers/screenDimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import Filter from '../components/Filter';
import Word from '../components/Word';
import Form from '../components/Form';
export default class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            words: [
                { id: 1, en: 'One', vn: 'Một', isMemorized: true },
                { id: 2, en: 'Two', vn: 'Hai', isMemorized: true },
                { id: 3, en: 'Three', vn: 'Ba', isMemorized: false },
                { id: 4, en: 'Four', vn: 'Bốn', isMemorized: false },
                { id: 5, en: 'Five', vn: 'Năm', isMemorized: true },
            ],
            shouldShowForm: false,
            txtEn: '',
            txtVn: '',
            filterMode: 'Show_All'
        };
    }

    ontoggleWord = (word) => {
        const newWords = this.state.words.map(item => {
            if (item.id === word.id) {
                return { ...item, isMemorized: !item.isMemorized };
            }
            return item;
        });
        this.setState({ words: newWords });
    }

    onremoveWord = (word) => {
        const newWords = this.state.words.filter(item => {
            if (item.id === word.id) {
                return false;
            }
            return true;
        });
        this.setState({ words: newWords });
    }

    ontoggleForm = () => {
        this.setState({ shouldShowForm: !this.state.shouldShowForm });
    };
    
    onaddWord = () => {
        const {txtEn, txtVn} = this.state;
        if(txtEn.length <= 0 || txtVn.length <= 0)
        {
            return alert('Ban phai nhap day du thong tin')
        }
        const newWords = this.state.words.map(word => ({...word}))

        const newWord = {
            id: Math.random(),
            en : txtEn,
            vn: txtVn,
            isMemorized: false,
        }
        newWords.push(newWord);
        this.setState({words : newWords, txtEn: '', txtVn: ''}, () =>{
            this.textInputEn.clear();
            this.textInputVn.clear();
        })
    }
    onValueFilterChange = (value) => (this.setState({filterMode : value}))
    onChangeTextEn = (text) => this.setState({txtEn: text})
    onChangeTextVn = (text) => this.setState({txtVn: text})
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <Form 
                shouldShowForm={this.state.shouldShowForm} 
                ontoggleForm = {this.ontoggleForm}
                onaddWord = {this.onaddWord}
                onChangeTextEn ={this.onChangeTextEn}
                onChangeTextVn ={this.onChangeTextVn}
                />
                <Filter 
                    filterMode={this.state.filterMode}
                    onValueFilterChange ={this.onValueFilterChange}
                />
                <Word 
                    data ={this.state.words}
                    filterMode={this.state.filterMode}
                    onremoveWord={this.onremoveWord}
                    ontoggleWord={this.ontoggleWord}
                    >
                </Word>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textMemorize: {
        color: 'white',
        fontSize: screenDimension.getWidth() / 22,
    },
    textRemove: {
        color: 'darkblue',
        fontSize: screenDimension.getWidth() / 22,
    },
    containerTouchable: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
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