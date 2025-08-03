import styled from "styled-components";

// 각각 import 가능하게끔 구성
// 아래에 default로 export하게되면 한 개만 가능한데 각각에 export붙이면 여러개 export가능
export const SimpleButton = styled.button`
  color:white;
  background-color:purple;
`;

/* SimpleButton을 상속받아서 스타일 추가, button 객체도 포함해서 상속 */
export const LargeButton = styled(SimpleButton)`
  font-size:50px;
`;