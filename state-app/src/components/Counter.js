import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // App에서 정의하지 않는 이유는 역할, 변수등이 하나로 고정되어있으니까
  // const onClickPlus = () => setCount(count+1);
  const onClickPlus = () => setCount(count+1);
  const onClickMinus = () => {
    if (count == 0){
      alert('count는 0 밑으로 내려갈 수 없습니다.');
    }
    else {
      setCount(count-1);
      // setCount(count > 0 ? count-1: count); // state의 setter함수가 호출되어도 value값이 변화가 없으면 rendering하지 않음
    }
  }
  return (
    <div>
      <hr/>
      <h5>{count}</h5>
      <button onClick={onClickMinus}>-</button> &nbsp;
      <button onClick={onClickPlus}>+</button> &nbsp;
    </div>
  );
};

export default Counter;