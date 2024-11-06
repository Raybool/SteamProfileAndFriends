/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import { Provider } from './providers/Provider';
import { Navigators } from './routes/navigator';

export const App: React.FC = () => (
  <Provider>
    <Navigators />
  </Provider>
);
