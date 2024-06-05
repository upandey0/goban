import { atom } from 'recoil';

export const responseState = atom({
  key: 'responseState',
  default: {
    data: null,
    loading: false,
    error: null,
  },
});
