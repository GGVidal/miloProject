import axios from 'axios';

import {REQUEST_DATA, RECEIVE_DATA, RECEIVE_ERROR} from './constants';

let dataAction = {
  fetchData() {
    return (dispatch) => {
      dispatch({type: REQUEST_DATA});
      axios
        .get('https://guarded-escarpment-87424.herokuapp.com/api/postss')
        .then((response) =>
          dispatch({
            type: RECEIVE_DATA,
            loading: false,
            data: response.data,
            error: '',
          }),
        )

        .catch((error) =>
          dispatch({
            type: RECEIVE_ERROR,
            error: error,
            data: null,
          }),
        );
    };
  },
};

export default dataAction;
