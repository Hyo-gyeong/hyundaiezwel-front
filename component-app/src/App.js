import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import Content from './components/Content';
import Nav2 from './components/Nav2';

function Header() { // Header 컴포넌트 생성했으므로 다른 컴포넌트에서 태그처럼 사용 가능, (동일 파일 내에서 생성시) 함수 이름 대문자로 시작
  return (
    <header>
      <h1><a href='/'>WEB</a></h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li><a href=''>html</a></li>
        <li><a href=''>css</a></li>
        <li><a href=''>js</a></li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>welcome</h2>
      Hello, Web
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header> {/* 컴포넌트 추가 = 사용자 정의 태그 추가 */}
      <Header />
      <header>ㅎㅎ</header> {/* 일반 html 태그 사용 */}
      <Nav />
      <Article />
      <Subject />
      <Content />
      <Nav2 />
    </div>
  );
}

export default App;
