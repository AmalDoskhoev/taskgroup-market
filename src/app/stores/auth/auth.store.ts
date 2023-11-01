import { create } from 'zustand';

import { type UserDataEntity } from '@/shared/model';

import { type UserStore } from '.';

export const useUserStore = create<UserStore>(set => ({
  userData: null,
  loading: false,
  setUserData: (data: UserDataEntity) => {
    set(state => ({
      ...state,
      userData: data
    }));
  },
  logout: () => {
    set(state => ({
      ...state,
      userData: null
    }));
  },
  setLoading: (loading: boolean) => {
    set(state => ({
      ...state,
      loading
    }));
  }
}));
