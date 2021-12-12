import { createContext } from "react";

export const ListContext = createContext({
  list: [],
  setList: () => {},
});

export const DetailContext = createContext({
  detail: {},
  setList: () => {},
});
