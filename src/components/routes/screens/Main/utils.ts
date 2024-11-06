import axios from 'axios';

import { ENDPOINTS } from 'src/constants/api';
import { userStore } from 'src/mobx/user';
import { StatusType, UserType } from 'src/types';
import { getUrl } from 'src/utils/lib';

export const getProfile = async (
  setData: React.Dispatch<React.SetStateAction<UserType | undefined>>
) => {
  const { apiKey, steamId } = userStore;

  const data = await axios
    .get(getUrl(ENDPOINTS.GET_PLAYER_SUMMARIES), {
      params: {
        key: apiKey,
        steamids: steamId,
      },
    })
    .then((value) => value.data.response.players[0]);

  setData(data);
};

export const getStatus = (lastlogoff?: number): StatusType => {
  if (lastlogoff === 0) {
    return 'online';
  } else {
    return 'offline';
  }
};

// export const useGetProfile = () => {
//   const [user, setUser] = useState(null);

//   const getProfile = async () => {
//     const { apiKey, steamId } = userStore;

//     const data = await axios
//       .get(getUrl(Path.GET_PLAYER_SUMMARIES), {
//         params: {
//           key: apiKey,
//           steamids: steamId,
//         },
//       })
//       .then((value) => value.data.response.players[0]);

//     setUser(data);
//   };

//   useEffect(() => {
//     getProfile();
//   }, []);

//   return user;
// };
