import logo from './logo.svg';
import './App.css';
import Left1 from './components/Left1';
import { useState } from 'react';
import Right1 from './components/Right1';

function App() {
  // state 선언
  let [count, setCount] = useState(0);

  // + 버튼 이벤트 처리 함수
  const onCountAdd = () => setCount(count+1);
  // - 버튼 이벤트 처리 함수
  const onCountMinus = () => setCount(count > 0 ? count-1 : count);
  return (
    <div className="App">
      <h3>root</h3>
      <div id='container'>
        <Left1 count={count}></Left1>
        <Right1 onCountAdd={onCountAdd} onCountMinus={onCountMinus}></Right1>
      </div>
    </div>
  );
}

export default App;
