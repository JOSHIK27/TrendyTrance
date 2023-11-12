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
