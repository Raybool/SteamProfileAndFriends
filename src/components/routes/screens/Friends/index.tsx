import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { SeparateLine } from 'src/components/atoms/SeparateLine';
import { ProfileCard } from 'src/components/molecules/ProfileCard';
import { FriendType, UserType } from 'src/types';

import { styles } from './styles';
import { getFriends, getProfile } from './utils';

export const Friends: React.FC = () => {
  const [friends, setFriends] = useState<FriendType[]>([]);
  const [friendsData, setFriendsData] = useState<UserType[]>([]);

  const friendsIDs = String(friends.map((friend) => friend.steamid));

  const sortedFriendIDs = friends
    .sort((a, b) => b.friend_since - a.friend_since)
    .map((friend) => friend.steamid);

  useEffect(() => {
    getFriends(setFriends);
  }, []);

  useEffect(() => {
    getProfile(friendsIDs, sortedFriendIDs, setFriendsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friendsIDs]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cписок друзей</Text>

      <FlatList
        data={friendsData}
        ItemSeparatorComponent={SeparateLine}
        renderItem={({ item }) => {
          const date = new Date(
            (friends.findLast((friend) => friend.steamid === item.steamid)
              ?.friend_since || 0) * 1000
          ).toLocaleDateString();

          return (
            <ProfileCard
              username={item.steamid}
              avatar={item.avatar}
              subtitle={date}
            />
          );
        }}
      />
    </View>
  );
};
