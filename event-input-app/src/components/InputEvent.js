import React, {useState} from 'react';

const InputEvent = () => {
  const [title, setTitle] = useState('지금 우리 학교는');
  const [inputValue, setInputValue] = useState('');

  // 글자 입력시 이벤트 처리함수 -> 직접 가져올 필요 없음, 계속 최신상태니까
  // 입력된 값으로 inputValue 값 변경
  // 돔 객체 참조를 최소화 함!
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <hr/>
      <h2>{title}</h2>
      {/* input 태그에 값 입력하면 onChange 이벤트 발생
      입력된 값 : event.target.value */}
      <input type="text" value={inputValue} onChange={onInputChange}/> &nbsp; {/* 입력되는 순간순간마다 함수 호출*/} 
      <button onClick={() => setTitle(inputValue)}>변경</button>
    </div>
  );
};

export default InputEvent;