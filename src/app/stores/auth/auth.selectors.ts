import { type UserStore } from '.';

export const selectUserData = (state: UserStore) => state.userData;
export const selectLoading = (state: UserStore) => state.loading;
export const selectSetUserData = (state: UserStore) => state.setUserData;
export const selectLogout = (state: UserStore) => state.logout;
export const selectSetLoading = (state: UserStore) => state.setLoading;
