import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import SubHeader from '../../components/Subheader';
import FlatList from '../../components/Flatlist';
import Spinner from 'react-native-loading-spinner-overlay';
import _ from 'lodash';
import {connect} from 'react-redux';
import Action from '../../store/actions';

const InitialScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const dataServer = props.data ? props.data.posts : null;

  useEffect(() => {
    const request = () => {
      setLoading(true);
      try {
        props.fetchData();
        setLoading(false);
      } catch (e) {
        setLoading(false);
        Alert.alert(
          'Houve algum problema na conexão com o servidor, verifique se você possui internet',
        );
      }
    };
    request();
  }, []);
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

  const onFilter = (filterValue, filterType) => {
    const filterData = dataServer.filter(
      (value, index) => value.resource[filterType] === filterValue,
    );
    setFilteredData(filterData);
  };
  return (
    <View>
      <SubHeader
        data={dataServer}
        onFilter={onFilter}
        valueLength={
          _.isEmpty(filteredData)
            ? dataServer
              ? dataServer.length
              : 0
            : filteredData.length
        }
      />

      {_.isEmpty(dataServer) ? (
        <Spinner
          visible={_.isEmpty(dataServer)}
          textContent={'Carregando dados'}
        />
      ) : (
        <FlatList
          data={_.isEmpty(filteredData) ? dataServer : filteredData}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
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
)(InitialScreen);
export default DataAppContainer;
