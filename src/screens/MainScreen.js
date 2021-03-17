import React, { Component } from 'react'
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import screenDemensions from '../helpers/screenDemensions'
export default class MainScreen extends Component {

    render() {
        // destructuring
        // const {en, vn, isMemorized} = {en: 'One', vn: 'Mot', isMemorized: true}

        const words = [
            {id:1, en: 'one', vn: 'Mot'},
            {id:2, en: 'two', vn: 'Hai'},
            {id:3, en: 'three', vn: 'Ba'}
        ]

        return (
            <SafeAreaView 
            style={{
                flex: 1, 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            {
                <TouchableOpacity
                    onPress={() =>{
                        alert('hello')
                    }}
                    style={{
                        backgroundColor: 'orange',
                        height: screenDemensions.getWidth() / 4.5,
                        width: screenDemensions.getHeight() / 6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 100
                    }}>
                        <Text>Click me</Text>
                </TouchableOpacity>
            }
            </SafeAreaView>
        )
    }
}
