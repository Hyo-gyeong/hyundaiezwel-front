import React, {useState} from 'react';

const Login = (props) => {
  const [inputId, setId] = useState('');
  const [inputPw, setPw] = useState('');
  const onIdChange = (e) => {
    setId(e.target.value);
  }
  const onPwChange = (e) => {
    setPw(e.target.value);
  }
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        props.onLogin(inputId, inputPw);
        event.target.id.value = "";
        event.target.pw.value = "";
      }}>
        <p>ID : <input type="text" value={inputId} name="id" onChange={onIdChange}/></p>
        <p>Pass : <input type="password" value={inputPw} name="pw" onChange={onPwChange} /></p>
        <input type="submit" value="확인"/>
      </form>
    </div>
  );
};

export default Login;