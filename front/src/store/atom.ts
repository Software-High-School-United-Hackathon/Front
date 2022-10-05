import { atom } from "recoil";

export const infoState = atom({
  key: "infoState",
  default: {
    name: "",
    age: 0,
    disabled: true,
  },
});
