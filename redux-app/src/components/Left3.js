import React from 'react';
import {useSelector} from 'react-redux';

const Left3 = () => {
  // Store에 접근해서 state value인 count값을 출력
  // useSelector() 사용해서 store의 state에 접근 가능
  // 아래 코드가 최초 실행되는 시점은 currentState가 undefined임
  // -> reducer에 if문이 실행되면서 count=0반환됨 & currentState는 count가 0이다 로 설정됨
  // 두 번째 실행 시점부터는 currentState가 0으로 전달되므로 if문 실행 x (action을 요청하면 if문 밖이 실행됨)
  const count = useSelector((state) => state.count); // state는 reducer가 반환한 객체
  return (
    <div>
      <h3>Left3</h3>
      count : {count}
    </div> 
  );
};

export default Left3;