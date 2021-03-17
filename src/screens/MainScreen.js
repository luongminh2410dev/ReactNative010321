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

        const arrNames = ['teo','ti','tun','tuan']
        return (
            <SafeAreaView 
            style={{
                flex: 1, 
                flexDirection: 'row', 
                justifyContent: 'space-evenly'
            }}>
                {/* <Text style={{fontSize: 30}}> {en} </Text>
                <Text style={{fontSize: 30}}> {isMemorized ? '----': vn} </Text> */}
            {
                [
                <Text>{arrNames[0]}</Text>,
                <Text>{arrNames[1]}</Text>,
                <Text>{arrNames[2]}</Text>,
                <Text>{arrNames[3]}</Text>
                ]
            }
            {/* {
                arrNames.map((name) =>{
                    return <Text>{name}</Text>
                })
            } */}
            </SafeAreaView>
        )
    }
}
