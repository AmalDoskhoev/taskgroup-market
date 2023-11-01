import { type UserDataEntity } from '@/shared/model';

export interface UserStore {
  userData: UserDataEntity | null;
  loading: boolean;
  setUserData: (data: UserDataEntity) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}
