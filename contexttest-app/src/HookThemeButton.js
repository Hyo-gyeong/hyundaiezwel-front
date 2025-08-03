import { useContext } from "react";
import { Button } from "@mui/material";
import ThemeContext from "./components/ThemeContext";

export default function HookThemeButton(){
  const {mode, toggleMode} = useContext(ThemeContext);
  return (
    // contained : 배경색을 갖는 버튼으로 만들겠다
    <Button onClick={toggleMode} variant="contained">
      Mode {mode}
    </Button>
  );
}