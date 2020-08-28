import React, {useState} from 'react';
import {ModernHeader} from '@freakycoder/react-native-header-view';
import Modal from './Modal';
import {Picker} from '@react-native-community/picker';
import _ from 'lodash';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

const Subheader = ({data, onFilter, valueLength}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filterType, setFilterType] = useState('');

  const filterData = () => {
    onFilter(selectedFilter, filterType);
    setModalVisible(false);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View>
      <View>
        <ModernHeader
          leftIconComponent={
            <View>
              <Text>{valueLength ? valueLength : 0} items</Text>
            </View>
          }
          height={50}
          text=" "
          rightIconOnPress={() => {
            setModalVisible(true);
          }}
          rightIconType="FontAwesome"
          rightIconName="filter"
          rightIconColor="#00796B"
        />
      </View>
      <View>
        <Modal visible={modalVisible} onExitModal={onCloseModal}>
          <ModernHeader
            text="Filtrar"
            backgroundColor="#00796B"
            height={50}
            textStyle={{
              color: '#FFFFFF',
              fontSize: 20,
            }}
            rightIconName="close-outline"
            rightIconColor="#FFFFFF"
            rightIconType="Ionicons"
            rightIconOnPress={() => setModalVisible(false)}
            leftDisable={true}
          />
          <View style={styles.item}>
            <TouchableOpacity>
              <Picker
                style={{height: 40, width: 340}}
                selectedValue={selectedFilter}
                onValueChange={(itemValue, itemIndex) => {
                  setFilterType('language_id');
                  setSelectedFilter(itemValue);
                }}>
                <Picker.Item label="Language id" value="language_id" />
                {_.uniqBy(data, 'resource.language_id').map((value, index) => {
                  return (
                    <Picker.Item
                      index={index}
                      label={value.resource.language_id}
                      value={value.resource.language_id}
                    />
                  );
                })}
              </Picker>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity>
              <Picker
                style={{height: 40, width: 340}}
                selectedValue={selectedFilter}
                onValueChange={(itemValue, itemIndex) => {
                  setFilterType('module_id');
                  setSelectedFilter(itemValue);
                }}>
                <Picker.Item label="Module id" value="module_id" />
                {_.uniqBy(data, 'resource.module_id').map((value, index) => {
                  return (
                    <Picker.Item
                      index={index}
                      label={value.resource.module_id}
                      value={value.resource.module_id}
                    />
                  );
                })}
              </Picker>
            </TouchableOpacity>
          </View>
          <Button
            title="Aplicar"
            color="#00796B"
            onPress={() => filterData()}
          />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 16,
    marginHorizontal: 8,
    height: 40,
    backgroundColor: '#B2DFDB',
  },
  title: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  separator: {
    height: 5,
  },
});

export default Subheader;
