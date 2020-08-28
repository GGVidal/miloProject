import axios from 'axios';

import {REQUEST_DATA, RECEIVE_DATA} from './constants';

let dataAction = {
  fetchData() {
    return (dispatch) => {
      dispatch({type: REQUEST_DATA});

      axios
        .get('https://guarded-escarpment-87424.herokuapp.com/api/posts')
        .then((response) =>
          dispatch({
            type: RECEIVE_DATA,
            loading: false,
            data: response.data,
          }),
        )

        .catch((error) =>
          dispatch({
            type: RECEIVE_DATA,
            error: error.message,
            data: null,
          }),
        );
    };
  },
};

export default dataAction;
