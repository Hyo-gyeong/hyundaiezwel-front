import React, { useState } from 'react';
import '../App.css';

const Contents = () => {
  let [item, setItem] = useState('');
  let [titles, setTitles] = useState([
    "지금 우리 학교는",
    '오징어 게임'
  ]);

  const onItemAdd = () => {
    if (item === "") {
      alert('값을 입력하세요');
      // js에서처럼 id값 직접 접근은 불가 titleInput.focus(); x
    } else if (titles.includes(item)){ // inclues(value) : 배열 내 원소값과 value가 동일하면 true반환
      alert('이미 존재합니다. 다른 제목으로 입력하세요')
      setItem('');
    }
    else {
      // push는 기존의 객체에 데이터를 추가함
      // push와는 다르게 concat은 두 객체를 붙여서 '새로운' 객체를 만들기 때문에 배열을 복사해서 사용한 것과 같은 효과
      // setTitles(titles.concat(item));
      
      // 배열 하나 생성하는 방법 - spread 연산자, 객체나 배열을 복제할 떄 사용
      // titles배열을 생성하고 item을 맨 뒤에 붙여라
      setTitles([...titles, item]);
      setItem('');
    }
    document.getElementById('titleInput').focus();
  }

  const onItemRemove = (title, index) => {
    // filter는 새로운 배열을 반환함 -> 원본에 변화가 없음
    setTitles(titles.filter((title)=>titles[index] !== title)); // 삭제버튼 누른 title 뺴고 나머지를 가져오겠다
  }

  const onItemChange = (event) => {
    setItem(event.target.value);
  }

  return (
    <div>
      <div className='header'>
        <h3>인기컨텐츠</h3>
      </div>
      <div className='content'>
        {
          // forEach()가 배열 요소마다 한 번씩 주어진 함수를 실행하는 것과 달리,
          // map()은 배열 내의 모든 요소 각각에 대하여 주어진 함수(콜백)를 호출한 결과를 모아 새로운 배열을 반환한다는 특징을 가지고 있다.
          titles.map((title, index) => ( // arr.map(function(element, index, array){  }, this);
            <div key={index}> {/* 반복되는 내용은 리액트 내부 돔에서 구분하기 좋게 key를 사용하라고 권장 */}
              <p>{index} : {title} <button onClick={() => onItemRemove(title, index)}>삭제</button></p>
              <hr />
            </div>
          ))
        }
        <input type="text" id="titleInput" value={item} onChange={onItemChange} />
        <button onClick={onItemAdd}>항목추가</button>
      </div>
      {/*
      <div>
      // 이렇게 정적으로 쓰면 비효율적임
        <p>{title[0]}</p> // 데이터 바인딩
        <hr/>
      </div>
      <div>
        <p>{title[1]}</p>
        <hr/>
      </div>
      */}
    </div>
  );
};

export default Contents;