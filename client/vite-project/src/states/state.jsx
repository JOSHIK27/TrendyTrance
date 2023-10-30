import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
export const emailState = atom({
  key: "1",
  default: "",
});

export const passwordState = atom({
  key: "2",
  default: "",
});
