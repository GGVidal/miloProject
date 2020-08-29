import React, {useState} from 'react';
import {ModernHeader} from '@freakycoder/react-native-header-view';
import {View, Text, Button} from 'react-native';
import _ from 'lodash';
import Modal from './Modal';
import Filter from './Filter';

const Subheader = ({data, onFilter, valueLength}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    language_id: 'Language ID',
    module_id: 'Module ID',
  });

  const filterData = () => {
    onFilter(selectedFilter);
    setModalVisible(false);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const onSelectFilter = (value, type) => {
    setSelectedFilter((filter) => ({
      ...filter,
      [type]: value,
    }));
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
          <Filter
            data={data}
            selectedFilter={selectedFilter}
            onSelectFilter={onSelectFilter}
          />
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
export default Subheader;
