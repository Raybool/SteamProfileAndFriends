import { ENDPOINTS } from 'src/constants/api';
import { API_URL } from 'src/constants/env';

export const getUrl = (path: ENDPOINTS) => `${API_URL}${path}`;
