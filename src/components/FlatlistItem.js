import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatListItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {item.resource.updated_at}
        {'\n'}
        {item.resource.resource_id}
        {'\n'}
        {item.resource.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});

export default FlatListItem;
