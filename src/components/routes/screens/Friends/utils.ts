import axios from 'axios';

import { ENDPOINTS } from 'src/constants/api';
import { userStore } from 'src/mobx/user';
import { FriendType, UserType } from 'src/types';
import { getUrl } from 'src/utils/lib';

export const getFriends = async (
  setData: React.Dispatch<React.SetStateAction<FriendType[]>>
) => {
  const { apiKey, steamId } = userStore;

  const data = await axios
    .get(getUrl(ENDPOINTS.GET_FRIEND_LIST), {
      params: {
        key: apiKey,
        steamid: steamId,
        relationship: 'friend',
      },
    })
    .then((value) => value.data.friendslist.friends);

  setData(data);
};

export const getProfile = async (
  steamids: string,
  sortedIDs: string[],
  setData: React.Dispatch<React.SetStateAction<UserType[]>>
) => {
  const { apiKey } = userStore;

  try {
    const data = await axios
      .get(getUrl(ENDPOINTS.GET_PLAYER_SUMMARIES), {
        params: {
          key: apiKey,
          steamids,
        },
      })
      .then((value) => value.data.response.players as UserType[]);

    const arr: UserType[] = [];

    const emptyUser: UserType = {
      steamid: '',
      avatar: '',
      personaname: '',
      lastlogoff: 0,
    };

    sortedIDs.forEach((id) => {
      arr.push(data.findLast((item) => item.steamid === id) || emptyUser);
    });

    setData(arr);
  } catch (error) {
    console.log(error);
  }
};
