import logo from './logo.svg';
import './App.css';
import InputEvent from './components/InputEvent';
import Login from './components/Login';

// DOM 요소에만 이벤트 설정 가능
// 사용자가 직접 만든 사용자 정의 태그(컴포넌트)에는 이벤트 설정 불가능
// <MyComp onClick={function dosth(){}}/> 이건 이벤트 연결이 아닌 props를 전달하는 것
// 속성으로 받아서 DOM요소에 이벤트로 전달해야함
// 무조건 속성만 설정이 가능

function App() {
  return (
    <div className="App">
      {/* <InputEvent /> */}
      <Login onLogin={
        (id, pw) => {
          if (id === 'abcd' && pw === '1234'){
            alert('로그인 성공');
          } else {
            alert('로그인 실패');
          }
        }
      }/>
    </div>
  );
}

export default App;
