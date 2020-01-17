import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Products from '~/pages/Products';
import Sales from '~/pages/Sales';
import Cart from '~/pages/Cart';
import Types from '~/pages/Types';
import Sizes from '~/pages/Sizes';
import Finish from '~/pages/Finish';

export default (isSigned = false) => createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
      }),
      Main: createStackNavigator(
        {
          Products,
          Types,
          Sizes,
          Sales,
          Cart,
          Finish,
        },
        {
          defaultNavigationOptions: {
            header: null,
          },
        },
      ),
    },
    {
      initialRouteName: isSigned ? 'Main' : 'Sign',
    },
  ),
);
