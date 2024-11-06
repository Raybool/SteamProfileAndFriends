import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Button } from 'src/components/atoms/Button';
import { ProfileCard } from 'src/components/molecules/ProfileCard';
import { useUserStore } from 'src/mobx/user';
import { UserType } from 'src/types';

import { styles } from './styles';
import { getProfile, getStatus } from './utils';

export const Main: React.FC = observer(() => {
  const { logout } = useUserStore();

  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    getProfile(setUser);
  }, []);

  const status = getStatus(user?.lastlogoff);

  return (
    <View style={styles.container}>
      <ProfileCard
        avatar={user?.avatar || ''}
        username={user?.personaname || ''}
        status={status}
      />

      <Button title="Выйти" onPress={logout} />
    </View>
  );
});
