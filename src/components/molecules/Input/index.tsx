import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { Error } from '../Error';
import { styles } from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        numberOfLines={1}
        onBlur={onBlur}
      />

      <Error error={error} />
    </View>
  );
};
