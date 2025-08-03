import React, {useState} from 'react';

const Update = (props) => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(event) => { 
        event.preventDefault();
        // const title = event.target.title.value;
        // const body = event.target.body.value;
        props.onUpdate(title, body);         
      }}>
        {/* value값에 {}이렇게 넣으면 값이 고정돼버림. 따라서 수정이 안되기 때문에 이 또한 state로 관리되어야 함 */}
        {/* <p><input type='text' name='title' placeholder='제목' value={props.title}/></p> */}
        {/* <p><textarea name='body' placeholder='내용' value={props.body} rows={10} cols={20}/></p> */}
        <p><input type='text' name='title' placeholder='제목' value={title} onChange={
          (event) => {setTitle(event.target.value);}
        }/></p>
        <p><textarea name='body' placeholder='내용' value={body} rows={10} cols={20} onChange={
          (event) => {setBody(event.target.value);}
        }/></p>
        <p><input type='submit' value='Update'/></p> {/* 폼태그를 기준으로 submit발생 */}
      </form>
    </article>
  );
};

export default Update;