import React from 'react';
import { Text, View } from 'react-native';

import { StatusType } from 'src/types';

type Props = { status: StatusType };

const textStatus: Record<Props['status'], string> = {
  inGame: 'В игре',
  online: 'Онлайн',
  offline: 'Оффлайн',
};

export const Status: React.FC<Props> = ({ status }) => (
  <View>
    <Text>{textStatus[status]}</Text>
  </View>
);
