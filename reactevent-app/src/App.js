import logo from './logo.svg';
import './App.css';
function Header(props) { // props로 onChangeMode가 넘어옴
  console.log('props', props.title)
  return (
    <header>
      {/* a 태그에 click 이벤트 추가
        리액트는 태그에 이벤트 핸들러 연걸되면 콜백함수가 호출될 때 
        event 객체를 첫번째 파라미터로 주입
      */}
      <h1><a href="/" onClick={function(event){
        event.preventDefault(); // a태그의 기본 동작 중지
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
                <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
                    event.preventDefault(); // a 태그는 다른 곳으로 이동하는게 기본 속성
                    props.onChangeMode(event.target.id);
                    props.onChangeMode(t.id); // event.target.id를 하려면 <a id={t.id}.. 이렇게 id속성을 생성해야
                                                // 현재 클릭한(이벤트 발생) 태그의 id를 받아서 출력 가능
                                              //event는 onClick 이벤트 객체이고,
                                              // event.target은 사용자가 실제로 클릭한 DOM 요소
                                              // .id는 그 요소의 HTML id 속성 값
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
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={
        function(){
          alert('WEB');
        }
      }></Header>
      <Header title="REACT" onChangeMode={ // 이벤트 속성에 함수 전달, 그냥 변수처럼 onChangeMode는 이름일 뿐이고, 의미는 props로 전달된 함수
        () => {
          alert('REACT');
        }
      }></Header>
      {/* 표현되는 목록에서 클릭된 목록에 따라 목록 아이디가 alert로 출력 */}
      <Nav topics={topics} onChangeMode={
        (id) => {
          alert(id);
        }
      }></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}
export default App;