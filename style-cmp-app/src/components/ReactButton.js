import React from 'react';

// 일반 객체 버튼
const ReactButton = (props) => {
  console.log(props);
  const style = { // 사용자 정의 객체로 css 속성 값 구성
    color:"white",
    backgroundColor:"purple"
  }
  return (
    <div>
      {/*
        className={props.className} : 객체 생성시 자동으로 생성되는 값
        이걸 넘겨줘야 상속받는 곳에서 추가적인 정의를 할 때 어떤 객체에 스타일을 적용해야하는지 알 수 있음
        상속은 여러 곳에서 받을 수 있기 때문에 구분이 필요함
        전달만 해주만 알아서 찾아서 스타일 적용함
        style component는 알아서 관리를 해주니까 className을 넘겨줄 필요가 없는데 컴포넌트를 따로 정의하면 className을 넘겨줘야함
      */}
      <button style={style} className={props.className}>{props.children}</button>
    </div>
  );
};

export default ReactButton;