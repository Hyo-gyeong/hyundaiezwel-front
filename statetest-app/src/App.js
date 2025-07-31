import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // useState 기능 포함

function Header(props) {
  console.log('props', props.title)
  return (
    <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}
function App() {
  // let mode = 'WELCOME';
  // _로 임시변수임을 표현
  // const _mode = useState('WELCOME'); // 길이가 2인 배열 반환, 첫 번째 원소 : 원소 설정값(WELCOME), 두 번째 원소 : f()
  // const mode = _mode[0]; // 상태값
  // const setMode = _mode[1]; // setMode는 상태변경 함수
  // console.log('_mode',_mode);

  // 일반적으로 배열 원소를 각각 받아서 사용 가능, ()안에는 초기값 세팅
  const initMode = {id:0, title:'Welcome', body:'Hello, Web'};
  const [mode, setMode] = useState(initMode);
  
  const topics = [
    {id:0, title:'html', body:'html is ...'},
    {id:1, title:'css', body:'css is ...'},
    {id:2, title:'javascript', body:'javascript is ...'}
  ]
  const content = <Article title={mode.title} body={mode.body}></Article>
  // let content = null;
  // if(mode === 'WELCOME') {
    
  // } else if(mode === 'html') {
  //   content = <Article title="html" body="Hello, Read"></Article>
  // }

  return (
    <div className="App">
      {/* 
        컴포넌트의 클릭 이벤트에 의해 mode변수의 값은 변경되지만 rendering이 발생하지 않아서 content변경 안됨
        content가 반영되려면 App 컴포넌트가 다시 렌더링 되어야 함
        mode값을 바꾸면 App을 호출(렌더링)되어야 함
        리액트는 변수의 변화나 상태 벼화가 생길 때 렌더링만 다시 할 수 있도록
        state라는 기능 제공
        state : 컴포넌트 내부에서 변경될 수 있는 값이고 값이 변경될 때마다 렌더링을 다시함

        함수형 컴포넌트에서는 사용할 수 없었음
        Hooks(라이브러리)
        : 클래스용 기능들은 함수형에서도 제공하기 시작
        useState() : 상태관리
        useEffect() : 렌더링 직후에 진행할 작업 설정

        useState()사용
        1. import {useState} from 'react';
        2. 상태변화 감지할 상수를 useState를 이용해서 생성
          const mode = 'WELCOME' => const mode = useState('WELCOME')
          mode 객체는 배열이고
          mode[0] -> 상태값(일반value),
          mode[1] -> 상태값을 변경시키기 위한 함수(setter) ex) mode[1]('READ')
          mode = 'READ'는 useState()에 의해 반환된 배열 객체는 사라지고 문자열로 변환되기 때문에
            이렇게 바꿀 수 없게 const로 선언하고 함수 사용해야함

        [현재 상태값, setter함수] = useState(초기값)
        : 초기값으로 문자, 숫자, 객체, 배열 가능

        ############################################
        리액트 배열에 대해 비구조화 할당
        const array = [1,2];
        const one = array[0];
        const two = array[1];

        -비구조화 할당
        const array = [1,2]
        const [one, two] = array;
        
      */}
      <Header title="WEB" onChangeMode={()=>{
        // mode = "WELCOME";
        setMode(initMode); // state 객체 값 변경 -> 컴포넌트 렌더링 다시 진행
        // console.log(mode);
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        // mode = "READ";
        setMode(topics[id]);
        // console.log(mode);
      }}></Nav>
      {content}
    </div>
  );
}
export default App;