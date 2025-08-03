import { createContext } from "react";

export default createContext({
  mode : 'light', // 현재모드
  toggleMode : () => {}, // 모드 전환을 위한 핸들러
});