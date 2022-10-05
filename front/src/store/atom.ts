import { atom } from "recoil";

export const infoState = atom({
  key: "infoState",
  default: {
    name: "",
    age: 0,
    name_disabled: true,
    age_disabled: true,
  },
});
