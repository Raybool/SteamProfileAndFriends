import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <SafeAreaView style={styles.safeArea}>
    <GestureHandlerRootView style={styles.safeArea}>
      {children}
    </GestureHandlerRootView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
