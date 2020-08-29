import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import FilterItem from './FilterItem';

const Filter = ({data, selectedFilter, onSelectFilter}) => {
  return (
    <>
      <View style={styles.item}>
        <TouchableOpacity>
          <FilterItem
            data={data}
            selectedFilter={selectedFilter}
            onSelectFilter={onSelectFilter}
            type={{value: 'language_id', label: 'Language ID'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity>
          <FilterItem
            data={data}
            selectedFilter={selectedFilter}
            onSelectFilter={onSelectFilter}
            type={{value: 'module_id', label: 'Module ID'}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 16,
    marginHorizontal: 8,
    height: 40,
    backgroundColor: '#B2DFDB',
  },
});
export default Filter;
