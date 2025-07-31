import React from 'react';

const reducer = (currentState, action) => {
  // currentState가 정의 되지 않은 경우 기본 state값 undefined 반환
  if (currentState === undefined) { // 한 번도 접근하지 않은 초기값
    // state value는 count라는 키에 넣음, count 선언만으로 생성됨
    return {count:0}; // {key:value}
  } // if문이 실행되면 currentState는 0이됨

  // 각 state의 불변성 유지하기 위해 state 복제해서 사용
  const newState = {...currentState}

  // state값 변경
  if (action.type === "ADD"){
    newState.count++;
  }
  else if (action.type === "MINUS"){
    if (newState.count > 0){
      newState.count--;
    }
  }

  // 변화시킨 state값 반환
  return newState; // 반환된 값이 새로운 state값이 됨
};

export default reducer;