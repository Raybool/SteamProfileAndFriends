import { StackNavigationProp } from '@react-navigation/stack';

import { ENDPOINTS } from './actions/api';
import { APP_SCREENS } from './constants/ui';

export type IconProps = {
  size?: number;
  fill?: string;
};

export type NavigatorsParamList = {
  Auth: undefined;
  Home: undefined;

  Main: undefined;
  Friends: undefined;
};

export type BasicNavigationProps = StackNavigationProp<
  NavigatorsParamList,
  APP_SCREENS
>;

export type StatusType = 'online' | 'offline';

export type UserType = {
  steamid: string;
  avatar: string;
  personaname: string;
  lastlogoff: number;
};

export type FriendType = {
  steamid: string;
  relationship: string;
  friend_since: number;
};

export namespace Actions {
  export type api = {
    [ENDPOINTS.GET_PLAYER_SUMMARIES]: {};
  };
}
