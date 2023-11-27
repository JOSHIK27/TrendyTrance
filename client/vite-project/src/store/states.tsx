import { atom, selector } from "recoil";

export const checkoutAtom = atom({
  key: "textState",
  default: [] as string[],
});

export const getCheckOutState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const getCheckOutState = get(checkoutAtom);
    return getCheckOutState;
  },
});

export const loginUserAtom = atom({
  key: "12",
  default: "",
});

export const loginPasswordAtom = atom({
  key: "192",
  default: "",
});

export const signupUserAtom = atom({
  key: "1222",
  default: "",
});

export const signupPasswordAtom = atom({
  key: "1922",
  default: "",
});

export const isLoggedIn = atom({
  key: "202020",
  default: false,
});

export const userId = atom({
  key: "soidbsb",
  default: null,
});
