import { createContext } from "react";

export const GlobalApi = createContext();

const GlobalApiProvider = (props) => {
  <GlobalApi.Provider>{props.children}</GlobalApi.Provider>;
};
export default GlobalApiProvider