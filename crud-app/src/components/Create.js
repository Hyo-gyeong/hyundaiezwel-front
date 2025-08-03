import React from 'react';

const Create = (props) => {
  return (
    <article>
      <h2>Create</h2>
      {/* submit 이벤트의 기본 기능은 중지시킴 (서버측으로 데이터를 전달하는 것) */}
      <form onSubmit={(event) => { // submit도 렌더링 진행
        event.preventDefault();
        // submit 이벤트 발생시에 (동적 시점) 입력된 데이터 추출
        // event 객체가 가지고 있고 target은 이벤트가 발생하는 form 태그
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body); // 인수 2개 필요        
      }}>
        {/* name값이 서버에서 사용할 변수명 */}
        <p><input type='text' name='title' placeholder='제목'/></p>
        <p><textarea name='body' placeholder='내용' rows={10} cols={20}/></p>
        {/* form 태그에 sumbit 이벤트가 발생하면 리렌더링 */}
        <p><input type='submit' value='Create'/></p>
      </form>
    </article>
  );
};

export default Create;