export enum ENDPOINTS {
  GET_PLAYER_SUMMARIES = 'ISteamUser/GetPlayerSummaries/v2/',
  GET_FRIEND_LIST = 'ISteamUser/GetFriendList/v1/',
}

export type Endpoints = typeof ENDPOINTS;
