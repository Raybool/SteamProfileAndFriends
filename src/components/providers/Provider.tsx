import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode } from 'react';

import { ThemeProvider } from './ThemeProvider';

type Props = {
  children: ReactNode;
};

export const Provider: React.FC<Props> = ({ children }) => (
  <NavigationContainer>
    <ThemeProvider>{children}</ThemeProvider>
  </NavigationContainer>
);
