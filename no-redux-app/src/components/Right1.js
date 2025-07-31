import React from 'react';
import Right2 from './Right2'

const Right1 = (props) => {
  return (
    <div>
      <h3>Right1</h3>
      <Right2 onCountAdd={props.onCountAdd} onCountMinus={props.onCountMinus}></Right2>
    </div>
  );
};

export default Right1;