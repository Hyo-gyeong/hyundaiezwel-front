import { Children, useContext, useState } from "react";
import {createTheme, ThemeProvide, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import ThemeContext from "./ThemeContext";
import { amber, grey } from "@mui/material/colors";

export default function MyThemeProvider({children}){
  const [mode, setMode] = useState('light');
  // 컨텍스트에 전달할 정보 구성
  const themeConfig = {
    mode,
    toggleMode:() => {
      setMode(prev => prev === 'light' ? 'dark' : 'light');
    }
  };

  const theme = createTheme({
    mode,
    palette:{
      mode,
      ...(mode === 'light'
      ? {
        primary:amber,
      }
      : {
        primary:{
          main: grey[500],
          contrastText:'#fff',
        },
        background:{
          default: grey[900],
          paper: grey[900],
        }
      })
    }
  });

  return (
    <ThemeContext.Provider value={themeConfig}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}