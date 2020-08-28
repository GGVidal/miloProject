import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
const FlatListBase = React.memo(({data, renderItem}) => {
  return (
    <FlatList
      removeClippedSubviews={true}
      style={{width: '100%'}}
      keyExtractor={(item, index) => index.toString()}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
});

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
export default FlatListBase;
