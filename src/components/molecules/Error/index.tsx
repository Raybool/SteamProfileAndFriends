import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';
import { ErrorProps } from './types';

export const Error: React.FC<ErrorProps> = ({ error }) =>
  error ? <Text style={styles.error}>{error}</Text> : null;
