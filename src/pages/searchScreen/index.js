import React, {useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import SearchBar from '../../../src/components/Searchbar';
import FlatListItem from '../../components/FlatlistItem';
import FlatList from '../../components/Flatlist';
import Action from '../../store/actions';

const SearchScreen = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [foundValue, setFoundValue] = useState([]);
  const onSearch = (value) => {
    const foundData = props.data.posts.filter((val, index) => {
      return val.resource.value.toLowerCase().includes(value.toLowerCase());
    });
    setFoundValue(foundData);
  };
  const renderItem = ({item, index}) => {
    return <FlatListItem item={item} index={index} />;
  };
  const dataServer = searchValue
    ? foundValue
    : props.data
    ? props.data.posts
    : null;
  return (
    <View>
      <View style={{height: 60}}>
        <SearchBar onSearch={onSearch} />
      </View>
      <FlatList
        data={_.isEmpty(foundValue) ? dataServer : foundValue}
        renderItem={renderItem}
      />
    </View>
  );
};

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
