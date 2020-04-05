import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Products from './pages/Products';
import Types from './pages/Types';
import Sizes from './pages/Sizes';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Orders from './pages/Orders';

const Stack = createStackNavigator();

export default function Routes({ isSigned }) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {!isSigned ? (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        ) : (
          <>
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Types" component={Types} />
            <Stack.Screen name="Sizes" component={Sizes} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="Orders" component={Orders} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Routes.propTypes = {
  isSigned: PropTypes.bool,
};

Routes.defaultProps = {
  isSigned: false,
};
