import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from 'api/index';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  cart_id?: number;
  addresses_ids?: number[];
};

type AuthState = {
  user: User | null;
  token: string | null;
  login: (userData: User, authToken: string) => void;
  logout: () => void;
  updateUser: (userData: User) => void;
  deleteUser: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: (userData: User, authToken: string) => {
        api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
        set({
          user: userData,
          token: authToken,
        });
      },

      logout: () => {
        delete api.defaults.headers.common['Authorization'];
        set({
          user: null,
          token: null,
        });
      },

      updateUser: (userData: User) => {
        set({
          user: userData,
        });
      },

      deleteUser: () => {
        delete api.defaults.headers.common['Authorization'];
        set({
          user: null,
          token: null,
        });
      },
    }),
    {
      name: '@prism_studio:auth',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        if (state?.token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
        }
      },
    }
  )
);

// Selector para isAuthenticated
export const useIsAuthenticated = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  return !!user && !!token;
};

