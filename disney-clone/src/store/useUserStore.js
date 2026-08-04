import { create } from "zustand";

export const useUserStore = create((set) => ({
  name: "",
  email: "",
  photo: "",
  token: "",

  setUserLoginDetails: ({ name, email, photo, token }) =>
    set(() => ({
      name,
      email,
      photo,
      token,
    })),

   logout: () => set(() => ({name: '', email: '', photo: '', token: ''}))
}));
