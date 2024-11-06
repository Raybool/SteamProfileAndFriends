import React from 'react';
import { Image, Text, View } from 'react-native';

import { Status } from 'src/components/molecules/Status';
import { StatusType } from 'src/types';

import { styles } from './styles';

type Props = {
  avatar?: string;
  username: string;
  status?: StatusType;
  subtitle?: string;
};

export const ProfileCard: React.FC<Props> = ({
  avatar,
  username,
  status,
  subtitle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxNameStatus}>
        <Text>{username}</Text>

        {subtitle && <Text>{subtitle}</Text>}
        {status && <Status status={status} />}
      </View>

      {avatar && <Image style={styles.avatar} src={avatar} />}
    </View>
  );
};
