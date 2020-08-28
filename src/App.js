import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InitialScreen from './pages/InitialScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './components/Header';
import SearchScreen from './pages/searchScreen';
import {Provider} from 'react-redux';
import store from './store/store';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={InitialScreen}
              options={{
                header: (props) => <Header {...props}>MiloProject</Header>,
              }}
            />
            <Stack.Screen
              name="Searchscreen"
              component={SearchScreen}
              options={{
                header: (props) => (
                  <Header {...props} search="true">
                    Buscar
                  </Header>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
