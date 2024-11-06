import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Friends as FriendsIcon } from 'src/components/atoms/icons/Friends';
import { Home as HomeIcon } from 'src/components/atoms/icons/Home';
import { Friends } from 'src/components/routes/screens/Friends';
import { Main } from 'src/components/routes/screens/Main';
import { APP_SCREENS } from 'src/constants/ui';
import { NavigatorsParamList } from 'src/types';

import { styles } from '../styles';

const { Navigator, Screen } = createBottomTabNavigator<NavigatorsParamList>();

export const Home: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'rgba(38, 26, 89, 1)',
      tabBarLabelStyle: styles.text,
      tabBarStyle: styles.container,
    }}
    initialRouteName={APP_SCREENS.HOME}
  >
    <Screen
      name={APP_SCREENS.MAIN}
      component={Main}
      options={{
        tabBarLabel: 'Главная',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
      }}
    />
    <Screen
      name={APP_SCREENS.FRIENDS}
      component={Friends}
      options={{
        tabBarLabel: 'Друзья',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <FriendsIcon fill={color} />,
      }}
    />
  </Navigator>
);
