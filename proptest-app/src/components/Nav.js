import React from 'react';

const Nav = (props) => {
  // props에 전달되는 객체는 topics라는 배열이 전달됨
  // props.topics -> 배열 전체 지칭
  // props.topics[idx] -> 배열 각각의 요소에 접근
  // props.topics[idx].title -> 특정 배열의 특정 속성값 접근
  const lis = []
  for (let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={"/read/"+t.id}>{t.title}</a></li>); // 권장 - list should have a unique "key" prop
  }
  return (
    // 각 원소의 title만 추출해서 목록을 구성
    <nav>
        <ol>
          {/* 선택자 컴포넌트에서 전
          달된 데이터에 따라 목록 생성 */}
          {/* <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">javascript</a></li> */}
          {lis}
        </ol>
    </nav>
  );
};

export default Nav;