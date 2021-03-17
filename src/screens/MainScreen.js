import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

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
                    style={{
                        backgroundColor: 'orange',
                        height: 100,
                        width: 100,
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
