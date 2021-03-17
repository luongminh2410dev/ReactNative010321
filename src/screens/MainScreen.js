import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default class MainScreen extends Component {

    shouldShowVn(isMemorized, vn)
    {
        if(isMemorized)
        {
            return '----'
        }else{
            return vn
        }
    }
    render() {
        // destructuring
        const {en, vn, isMemorized} = {en: 'One', vn: 'Mot', isMemorized: true}
        return (
            <SafeAreaView 
            style={{
                flex: 1, 
                flexDirection: 'row', 
                justifyContent: 'space-evenly'
            }}>
                <Text style={{fontSize: 30}}> {en} </Text>
                <Text style={{fontSize: 30}}> {this.shouldShowVn(isMemorized,vn)} </Text>
            </SafeAreaView>
        )
    }
}
