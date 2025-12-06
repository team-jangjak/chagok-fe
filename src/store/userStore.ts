import type { UserState } from '@/shared/types';
import { create } from 'zustand';

export const useUserStore = create<UserState>((set) => ({
  oauthId: 0,
  name: '',
  gender: '',
  email: '',
  birthDate: '',
  profileImage: '',
  tendency: 0,

  setOauthId: (id) => set({ oauthId: id }),

  setBasicInfo: (info) =>
    set(() => ({
      name: info.name,
      gender: info.gender,
      email: info.email,
      birthDate: info.birthDate,
      profileImage: info.profileImage,
    })),

  setTendency: (score) => set({ tendency: score }),

  resetUser: () =>
    set({
      oauthId: 0,
      name: '',
      gender: '',
      email: '',
      birthDate: '',
      profileImage: '',
      tendency: 0,
    }),
}));
