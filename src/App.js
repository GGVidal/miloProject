import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {GorgeousHeader} from '@freakycoder/react-native-header-view';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <View>
        <GorgeousHeader />
        
        <SearchBar
          autoFocus={true}
          fontColor="#c6c6c6"
          iconColor="#c6c6c6"
          shadowColor="#282828"
          cancelIconColor="#c6c6c6"
          backgroundColor="#353d5e"
          placeholder="Search here"
          onChangeText={(text) => {
            console.log(text);
          }}
          onPressCancel={() => {
            console.log('cancel');
          }}
          onPress={() => alert('onPress')}
          width={300}
        />
      </View>
    );
  }
}
