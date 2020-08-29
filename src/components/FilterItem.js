import React from 'react';
import {Picker} from '@react-native-community/picker';
import {StyleSheet} from 'react-native';
import _ from 'lodash';

const FilterItem = ({selectedFilter, data, onSelectFilter, type}) => {
  return (
    <Picker
      style={styles.item}
      selectedValue={selectedFilter[type.value]}
      onValueChange={(itemValue, itemIndex) => {
        onSelectFilter(itemValue, type.value);
      }}>
      <Picker.Item label={type.label} value="" />
      {_.uniqBy(data, `resource.${type.value}`).map((value, index) => {
        return (
          <Picker.Item
            index={index}
            label={value.resource[type.value]}
            value={value.resource[type.value]}
          />
        );
      })}
    </Picker>
  );
};
const styles = StyleSheet.create({
  item: {
    height: 40,
    width: 340,
  },
});

export default FilterItem;
