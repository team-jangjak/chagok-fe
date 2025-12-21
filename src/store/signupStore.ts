import { createStore } from 'zustand';

export interface SignupState {
  oauthId: number;
  name: string;
  gender: '' | '남자' | '여자';
  email: string;
  birthDate: string;
  profileImage: string;
  tendency: number;

  setOauthId: (id: number) => void;
  setBasicInfo: (info: {
    name: string;
    gender: '' | '남자' | '여자';
    email: string;
    birthDate: string;
    profileImage: string;
  }) => void;
  setTendency: (score: number) => void;
  reset: () => void;
}

export const createSignupStore = () =>
  createStore<SignupState>((set) => ({
    oauthId: 0,
    name: '',
    gender: '',
    email: '',
    birthDate: '',
    profileImage: '',
    tendency: 0,

    setOauthId: (id) => set({ oauthId: id }),

    setBasicInfo: (info) =>
      set((state) => ({
        ...state,
        ...info,
      })),

    setTendency: (score) => set({ tendency: score }),

    reset: () =>
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
