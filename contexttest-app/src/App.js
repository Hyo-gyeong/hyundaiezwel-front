import './App.css';
import './style.css';
import React, {createContext, useContext} from 'react';

// 적용할 css 테마로 구성 - context 생성
const themeDefault = {border :'10px solid red'};
const themeContext = createContext(themeDefault); // Context 생성, 전역으로 사용 가능
// context 객체인 themeContext는 Provider 기능 사용 할 수 있음

export default function App() {
  // themeContext 사용
  const theme = useContext(themeContext);
  console.log(theme);
  return (
    <div className="root" style={theme}>
      <h1>Hello World!</h1>
      <Test/>
      <Sub1/> 
    </div>
  );
}
function Test(){
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Test</h1>
    </div>
  );
}

function Sub1(){
  const theme = useContext(themeContext);
  return (
    // sub1이 공급자이고 아직 공급을 하지 않았기 때문에 자식 sub2,3는 가져다가 쓴다고 해도 공급받는게 없어서 theme반영 안됨
    // <themeContext.Provider>
    <themeContext.Provider value={{border: '10px solid green'}}>
    <div style={theme}>
      <h1>Sub1</h1>
      <Sub2/>
    </div>
    </themeContext.Provider>
  );
}

function Sub2(){
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3/>
    </div>
  );
}

function Sub3(){
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}
