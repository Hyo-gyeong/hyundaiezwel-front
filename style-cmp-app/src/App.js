import logo from './logo.svg';
import './App.css';
import ReactButton from './components/ReactButton';
import StyledButton from './components/StyledButton';
import {SimpleButton, LargeButton} from './components/CreateButton';
import { ReactLargeButton } from './components/ReactExpand';
import {PrimaryButton} from './components/DynamicStyle';

function App() {
  return (
    <div className="App">
      {/* 
        html과 똑같이 들어감
        <div><button style="color: white; background-color: purple;">ReactButton</button></div> 
      */}
      <ReactButton children={'ReactButton'}></ReactButton>
      {/* 
        class명이 동적으로 생성됨 + inline이 아니라 style태그에 css가 적용됨
        상속해서 변경 가능
        <style data-styled="active" data-styled-version="6.1.19">.dyWXLB{color:white;background-color:purple;}</style>
        <button class="sc-bRKDuR dyWXLB">StyleButton</button> 
      */}
      <StyledButton children={'StyleButton'}></StyledButton><br/>
      <SimpleButton children={'SimpleButton'}></SimpleButton><br/>
      <LargeButton children={'LargeButton'}></LargeButton>
      {/* 상속받은 것만 표현이 되고 내부에 정의한것은 표현되지 않음 ->  */}
      <ReactLargeButton children={'ReactLargeButton'}></ReactLargeButton>
      <PrimaryButton children={'PrimaryButton'}></PrimaryButton>
      <PrimaryButton children={'PrimaryButton'} primary></PrimaryButton>
    </div>
  );
}

export default App;
