import styled from "styled-components";

export const PrimaryButton = styled.button`
  color: ${
    props => props.primary ? 'white' : 'black'
  };

  background-color: ${
    props => props.primary ? 'red' : 'gray'
  }
`;

// ${function(props){ 
  //   // 함수로 정의를 하게되면 호출하는 쪽에서 준 값을 넘겨받아서 사용 가능
  //   // console.log(props);
  //   if (props.primary){
  //     return 'red';
  //   } else {
  //     return 'black';
  //   }
  // }};
