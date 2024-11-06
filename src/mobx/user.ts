import { types } from 'mobx-state-tree';
import React from 'react';

const UserStore = types
  .model('UserStore', {
    isAuth: types.boolean,
    apiKey: types.maybeNull(types.string),
    steamId: types.maybeNull(types.string),
  })
  .actions((self) => ({
    setApiKey(apiKey: string) {
      self.apiKey = apiKey;
    },

    setSteamId(steamId: string) {
      self.steamId = steamId;
    },

    auth() {
      self.isAuth = true;
    },

    logout() {
      self.isAuth = false;
      self.steamId = null;
      self.apiKey = null;
    },
  }));

export const userStore = UserStore.create({
  isAuth: false,
  apiKey: null,
  steamId: null,
});

export const UserStoreContext = React.createContext(userStore);
export const useUserStore = () => React.useContext(UserStoreContext);
