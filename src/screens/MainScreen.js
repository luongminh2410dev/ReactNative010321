import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default class MainScreen extends Component {

    // shouldShowVn(isMemorized, vn)
    // {
    //     if(isMemorized)
    //     {
    //         return '----'
    //     }else{
    //         return vn
    //     }
    // }
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
                alignItems: 'center'
            }}>
            {
                words.map((word) =>{
                    return (
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 30}}> {word.en} </Text>
                            <Text style={{fontSize: 30}}> {word.vn} </Text>
                        </View>
                    )
                })
            }
            </SafeAreaView>
        )
    }
}
