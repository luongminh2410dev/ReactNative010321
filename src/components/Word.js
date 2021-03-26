import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import ItemWord from './ItemWord';
import PropTypes from 'prop-types'
export default class Word extends Component {
    static propTypes = {
        data: PropTypes.array,
        filterMode: PropTypes.string
      }
      static defaultProps = {
        data: [],
        filterMode: 'Show_All'
      }
      render() {
        const {data} = this.props;
        return (
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item, index}) => (
              <ItemWord 
              word={item} 
              filterMode={this.props.filterMode}
              onremoveWord={this.props.onremoveWord}
              ontoggleWord={this.props.ontoggleWord} />
            )}
          />
        );
      }
}
