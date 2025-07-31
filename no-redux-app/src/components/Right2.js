import React from 'react';
import Right3 from './Right3';

const Right2 = (props) => {
  return (
    <div>
      <h3>Right2</h3>
      <Right3 onCountAdd={props.onCountAdd} onCountMinus={props.onCountMinus}></Right3>
    </div>
  );
};

export default Right2;