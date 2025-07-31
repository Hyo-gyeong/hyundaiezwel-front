import logo from './logo.svg';
import './App.css';
import Jsx from './components/jsx'; // 함수가 소문자로 정의되어있어도 import를 대문자로 하면 대문자로 사용 가능

function App() {
  return (
    <div className="App">
      <Jsx />
    </div>
  );
}

export default App;
