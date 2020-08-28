import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {View} from 'react-native';

const Searchbar = (props) => {
  return (
    <View>
      <SearchBar
        autoFocus={true}
        fontColor="#FFFFFF"
        borderRadius={5}
        iconColor="#FFFFFF"
        shadowColor="#282828"
        cancelIconColor="#FFFFFF"
        backgroundColor="#009688"
        placeholder="Pesquisar"
        shadowStyle={{marginBottom: 15}}
        // spinnerVisibility={true}
        onChangeText={(text) => {
          props.onSearch(text);
        }}
        onPress={() => props.onPress()}
        onPressCancel={() => {
          console.log('cancel');
        }}
        width={300}
      />
    </View>
  );
};
export default Searchbar;
