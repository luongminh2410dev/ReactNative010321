import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'

export default class Child extends PureComponent {
    // PureComponent ko nen su dung nhieu voi cac kieu du lieu Object
    // Check props function co su thay doi or dung PureComponent(Tranh bi render lai mac du ko thay doi)
    shouldComponentUpdate(newProps, newState)
    {
        // if(else)
        return false
    }
    render() {
        const {onInCrease} = this.props
        const {onDeCrease} = this.props
        const {onReset} = this.props
        return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={onInCrease}
            style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
            <Text>InCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDeCrease}
            style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
            <Text>DesCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onReset}
            style={{
              padding: 10,
              backgroundColor: 'yellow',
              borderRadius: 5,
            }}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
        )
    }
}
