import React from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './clubs/containers/RegistrationContainer';
import configureStore from './store/configureStore';

const store = configureStore();

var Root = () => {
  return(
  <Provider store={store}>
    {/* //makes store available */}
    	<StackNavigator />
  </Provider>
)
}

export default Root
