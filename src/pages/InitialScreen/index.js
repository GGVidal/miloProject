import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AlertData from '../../components/Alert';
import Spinner from 'react-native-loading-spinner-overlay';
import _ from 'lodash';
import {connect} from 'react-redux';
import SubHeader from '../../components/Subheader';
import FlatList from '../../components/Flatlist';
import FlatListItem from '../../components/FlatlistItem';
import Action from '../../store/actions';
import {treatRequestErrors} from '../../utils/ResponseErrors';

const InitialScreen = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [alert, setAlert] = useState({show: false, title: '', message: ''});
  const dataServer = props.data ? props.data.posts : null;
  useEffect(() => {
    const request = () => {
      props.fetchData();
      const errors = props.error ? treatRequestErrors(props.error) : null;
      if (errors) {
        setAlert((alert) => ({
          ...alert,
          show: true,
          title: errors.title,
          message: errors.message,
        }));
      }
    };
    request();
  }, []);
  const renderItem = ({item, index}) => {
    return <FlatListItem item={item} index={index} />;
  };

  const onFilter = (filterValue) => {
    setAlert((alert) => ({
      ...alert,
      show: false,
    }));
    const {language_id, module_id} = filterValue;
    const filterData = dataServer.filter((value, index) => {
      if (language_id && module_id) {
        return (
          value.resource.language_id === language_id &&
          value.resource.module_id === module_id
        );
      }
      if (language_id) {
        return value.resource.language_id === language_id;
      }
      if (module_id) {
        return value.resource.module_id === module_id;
      }
    });
    if (_.isEmpty(filterData)) {
      setAlert((alert) => ({
        ...alert,
        show: true,
        title: 'Aviso',
        message: 'Nenhum registro encontrado',
      }));
    }
    setFilteredData(filterData);
  };
  return (
    <View>
      <AlertData
        show={alert.show}
        title={alert.title}
        message={alert.message}
        hideAlert={() => {
          setAlert((alert) => ({
            ...alert,
            show: false,
          }));
        }}
      />
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

const mapStateToProps = (state) => ({
  data: state.data,
  error: state.error,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(Action.fetchData()),
});

const DataAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialScreen);
export default DataAppContainer;
