import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React from 'react';

import { Auth } from 'src/components/routes/screens/Auth';
import { APP_SCREENS } from 'src/constants/ui';
import { useUserStore } from 'src/mobx/user';
import { NavigatorsParamList } from 'src/types';

import { Home } from './Home';

const { Navigator, Screen } = createStackNavigator<NavigatorsParamList>();

export const Navigators: React.FC = observer(() => {
  const { isAuth } = useUserStore();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {!isAuth ? (
        <Screen name={APP_SCREENS.AUTH} component={Auth} />
      ) : (
        <Screen name={APP_SCREENS.HOME} component={Home} />
      )}
    </Navigator>
  );
});
