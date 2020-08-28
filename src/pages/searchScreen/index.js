import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Alert} from 'react-native';
import SearchBar from '../../../src/components/Searchbar';
import {connect} from 'react-redux';
import Action from '../../store/actions';
import _ from 'lodash';

const SearchScreen = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [foundValue, setFoundValue] = useState([]);
  const onSearch = (value) => {
    setSearchValue(value);
  };
  const onPress = () => {
    const foundData = props.data.posts.filter((val, index) => {
      if (val.resource.value.includes(searchValue)) {
        return val;
      }
    });
    setFoundValue(foundData);
  };
  const renderItem = ({item, index}) => {
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
  const dataServer = searchValue
    ? foundValue
    : props.data
    ? props.data.posts
    : null;
  const RenderFlatlist = React.memo((props) => {
    return !_.isEmpty(dataServer) ? (
      <FlatList
        removeClippedSubviews={true}
        style={{width: '100%'}}
        keyExtractor={(item, index) => index.toString()}
        data={_.isEmpty(foundValue) ? dataServer : foundValue}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    ) : (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text>Valores não encontrados</Text>
      </View>
    );
  });
  return (
    <View>
      <View style={{height: 60}}>
        <SearchBar onSearch={onSearch} onPress={onPress} />
      </View>
      <RenderFlatlist />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(Action.fetchData()),
});

const DataAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen);
export default DataAppContainer;
