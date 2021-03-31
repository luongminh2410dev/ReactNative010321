import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput,Alert } from 'react-native';
import screenDimension from '../helpers/screenDimension';
import Filter from '../components/Filter';
import Word from '../components/Word';
import Form from '../components/Form';
import { connect } from 'react-redux';

class MainScreen extends Component {

    ontoggleWord = (word) => {
        this.props.dispatch({ type : 'TOGGLE_WORD', word })
    }

    onremoveWord = (word) => {
        Alert.alert(
            "Thong bao",
            "Ban co chac chan muon xoa",
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Xoa',
                    onPress: () => {
                        this.props.dispatch({type: 'REMOVE_WORD', word});
                    },
                },
            ],
            { cancelable : false }
        )
        
    }

    ontoggleForm = () => {
        this.props.dispatch({ type: 'TOGGLE_FORM'});
    }
    
    onaddWord = (newWord, callback) => {
        this.props.dispatch({ type : 'ADD_WORD' , newWord });
        callback();
    }
    onValueFilterChange = (value) => {
        this.props.dispatch({ type : 'SET_FILTER_MODE', value });
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <Form 
                shouldShowForm={this.props.shouldShowForm} 
                ontoggleForm = {this.ontoggleForm}
                onaddWord = {this.onaddWord}
                />
                <Filter 
                    filterMode={this.props.filterMode}
                    onValueFilterChange ={this.onValueFilterChange}
                />
                <Word 
                    data ={this.props.words}
                    filterMode={this.props.filterMode}
                    onremoveWord={this.onremoveWord}
                    ontoggleWord={this.ontoggleWord}
                    >
                </Word>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        words : state.words ,
        filterMode : state.filterMode ,
        shouldShowForm : state.shouldShowForm,
    };
};

export default connect(mapStateToProps)(MainScreen);
// Cach viet tat:
// export default connect(state)(MainScreen);