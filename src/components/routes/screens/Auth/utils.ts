export const validate = (values: { steamId: string; apiKey: string }) => {
  const error: {
    steamId?: string;
    apiKey?: string;
  } = {};

  if (values.steamId === '') {
    error.steamId = 'SteamID не может быть пустым!';
  }

  if (values.apiKey === '') {
    error.apiKey = 'API Key не может быть пустым!';
  }

  return error;
};
