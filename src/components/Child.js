import React, { Component } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'


class Child extends Component {
    // PureComponent ko nen su dung nhieu voi cac kieu du lieu Object
    // Check props function co su thay doi or dung PureComponent(Tranh bi render lai mac du ko thay doi)
    shouldComponentUpdate(newProps, newState)
    {
        // if(else)
        return false
    }
    render() {
        return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            onPress={() => this.props.dispatch({type: 'INCREASE'})}
            style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
            <Text>InCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.dispatch({type: 'DECREASE'})}
            style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
            <Text>DesCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.dispatch({type: 'RESET'})}
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
export default connect()(Child);
