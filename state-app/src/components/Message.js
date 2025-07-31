import React, { useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState("출력 메시지"); // message 값 변화 상태 관리, 값변화시 다시 렌더링
  const [color, setColor] = useState("black");

  const onClickEnter = () => setMessage('안녕하세요?'); // 상태변화 발생 -> 렌더링 다시 발생 -> App도 렌더링이 다시 발생 -> 바뀐 부분에 리랜더링 발생
  const onClickExit = () => setMessage('안녕히 가세요'); 
  const onClickInit = () => setMessage('출력 메시지'); 

  return (
    <div>
      <h3>{message}</h3>
      <p/>
      {/* onClickEnter 함수를 onClick 이벤트의 콜백 함수로 전달 */}
      <button onClick={onClickEnter}>입장</button> &nbsp;
      <button onClick={onClickExit}>퇴장</button> &nbsp;
      <button onClick={onClickInit}>초기화</button> &nbsp;
      <hr/>
      {/* <h3>{color}</h3> */}
      <h3 style={{color:color}}>{color}</h3>
      {/* 이벤트 콜백함수 화상표 함수로 만들어 직접 연결 */}
      <button style={{color:"red"}} onClick={() => setColor('red')}>빨간색</button> &nbsp;
      <button style={{color:"blue"}} onClick={() => setColor('blue')}>파란색</button> &nbsp;
      <button style={{color:"green"}} onClick={() => setColor('green')}>초록색</button> &nbsp;
    </div>
  );
};

export default Message;