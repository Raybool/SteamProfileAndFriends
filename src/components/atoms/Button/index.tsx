import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
