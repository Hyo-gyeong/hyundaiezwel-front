import React from 'react';
import { useDispatch } from 'react-redux';

const Right3 = () => {
  // store에 접근해서 state값을 변경시키는 기능을 수행(action)
  // action은 useDispatch()활용해서 store에 의견 전달 가능
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={
        // reducer에 action 매개변수로 type속성이 전달됨
        () => { dispatch({type:"MINUS"})}
      }>-</button> &nbsp;
      <button onClick={
        () => { dispatch({type:"ADD"})}
      }>+</button>
    </div>
  );
};

export default Right3;