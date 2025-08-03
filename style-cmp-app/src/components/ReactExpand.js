import styled from "styled-components";
import ReactButton  from "./ReactButton"; // 상속받을 컴포넌트

// 일반 컴포넌트 상속받아 새로운 styled 컴포넌트 구성
// ReactButton의 스타일 상속받고 font-size 스타일 추가
// 아래와 같이 상속 받으면 상속받은 객체는 모두 표현되지만 내부에 정의한것은 표현되지 않음
// 아래 css가 추가되게 하려면 상속되는 컴포넌트에서 className(리액트가 동적 생성)을 포함시켜 반환해야 함
export const ReactLargeButton = styled(ReactButton)`
  font-size:50px;
`