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
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    {id:0, title:'html', body:'html is ...'},
    {id:1, title:'css', body:'css is ...'},
    {id:2, title:'javascript', body:'javascript is ...'}
  ]

  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++){ // id값이 같은 값을 얻어옴
      if (topics[i].id == id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME'); // state 객체 값 변경 -> 컴포넌트 렌더링 다시 진행
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('READ');
        setId(id);
      }}></Nav>
      {content}
    </div>
  );
}