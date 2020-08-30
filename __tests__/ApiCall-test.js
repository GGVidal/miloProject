/**
 * @format
 */

import 'react-native';
import React from 'react';
import actions from '../src/store/actions';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import mockAxios from 'axios';

Enzyme.configure({adapter: new Adapter()});

test('should fetch data', async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      posts: [
        {
          resource: {
            created_at: '2016-03-03T20:50:17Z',
            updated_at: '2020-05-05T12:38:26Z',
            resource_id: 'whatsnew',
            module_id: 'GreenMileTrack',
            value: "What's New",
            language_id: 'en',
          },
        },
      ],
    }),
  );
  const data = await actions.fetchData();
  console.log(data);
  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://guarded-escarpment-87424.herokuapp.com/api/posts',
  );
  //   const resp = {data: [{cities: ['NY']}]};

  //   axios.get.mockResolvedValue(resp);

  //   wrapper
  //     .instance()
  //     .fetchCities()
  //     .then((resp) => {
  //       expect(wrapper.state('cities')).toEqual(resp.data.cities);
  //     });
});
