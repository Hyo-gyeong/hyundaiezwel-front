import React from 'react';

const jsx = () => {
  // 자바스크립트 코드 자리
  const name = "홍길동"; // 상수 name 선언 및 생성
  const number = 100;
  const num = 3;

  // 내부함수, 사용자 정의 객체 선언
  // 객체 선언
  const person = {
    name : '성춘향',
    age : 20
  }
  // 내부 함수 정의
  function getPerson(){
    return person.name + "," + person.age;
  }

  return (
    <div>
      <h1>JSX입니다</h1>
      <h1>name 안녕!</h1> {/* 문자열 name */}
      <h1>{name} 안녕!</h1> {/* 스크립트 영역{}이므로 상수 name에 접근해서 저장된 값 표현 */}
      {number || '오리'}<br></br> {/* || 연산자는 왼쪽이 falsy면 오른쪽 값을 반환, ex) {name || '이름없음'} */}
      {number && '오리'}<br></br> {/* && 연산자는 왼쪽이 falsy면 바로 그 값을 반환 또는 무시 , 
                                    truthy면 오른쪽 값을 반환, number가 0, false, null, undefined 등 → 아무것도 출력되지 않음,
                                    number가 truthy → '오리'가 출력됨 */}
      {false && '오리'} {/* 무시됨 */}
      { // 조건 연산자 사용 가능 (참), (거짓) 순서, if문을 사용할 수도 있지만 조건 연산자 사용을 권장함
        name == '홍길동' ? (
          <h3>홍길동 입니다.</h3>
        ) : (
          <h3>홍길동이 아닙니다.</h3>
        )
      }
      { // 한 문장이면 콜론만 사용할 수도 있음
        name == '이몽룡' ? <h3>이몽룡입니다</h3> : <h3>이몽룡이 아닙니다</h3>
      }
      <div
        style={{ // inline style은 중괄호 두 번, 속성의 표기는 카멜표기법, 속성값은 '' 사이에
            margin:'0 auto',
            width:'50%',
            backgroundColor:'red',
            color:'white',
            fontSize:'36px',
            fontWeight:'bold',
            padding:10,
            marginTop:'20px'
        }}
      >
        인라인 스타일링 적용
      </div>
      <div className='rect'>
        className 속성 사용
      </div>
      주소 : 서울 <br/> {/* 단일 태그도 반드시 닫아줘야 함 */}
      // JSX 주석은 아님, (자바스크립트 주석) <br/>
      /* 주석아님, 문자열 처리됨 */ <br/>
      {/* 주석은 이렇게  */}
      {/* ctrl + / => 주석표시 자동 완성 */}
      {
        //자바스크립트 영역
        // 자동호출되는 함수 생성
        (function(){
          if (num == 1) return <div>value=1</div>;
          if (num == 2) return <div>value=2</div>;
          if (num == 3) return <div>value=3</div>;
        })()
      }
      {/* 사용자 정의 객체 값 반환 */}
      <div>{getPerson()}</div>
    </div>
  );
};

export default jsx;