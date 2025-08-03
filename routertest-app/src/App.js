import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
import { Route, Routes, Link, NavLink} from 'react-router-dom';


var contents = [
  {id:1, title:'Politics', description:'Politics is...'},
  {id:2, title:'Economy', description:'Economy is...'},
  {id:3, title:'Society', description:'Society is...'},
];

function App() {
  return (
    <div className="App">
      <h1>Hello React Router Dom</h1>
      {/*
        네트워크를 보면 새로고침을 하는 것을 확인할 수 있음.
        렌더링 진행될 때마다 페이지 전체 새로고침이 발생하기때문에 즉, 모든것을 처음부터 렌더링해서 비효율적 
        페이지 단위로 리로드 하지 않으려면 동적으로 가져오는 코드나 데이터는 비동기 기술을 이용해서 페이지를 만들어야 함
        리액트가 제공하는 Link 컴포넌트 활용
        애플리케이션 유지한 상태에서 페이지 주소만 변경 가능한 환경을 구성할 수 있음
      */}

      {/* 리로드가 되는 코드
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul> */}
      {/* 그냥 모든 컴포넌트가 순서대로 나열됨
      <Home/>
      <Topics/>
      <Contact/> */}

      {/* 리로드가 발생하지 않는 Link 컴포넌트 사용 코드, 네트워크가 유지됨 */}
      {/* <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul> */}
      {/* Link는 이동만 담당하는 반면 NavLink는 "현재 어디에 있는지"도 인식해서 현재 경로에 active 클래스가 자동으로 붙음 */}
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* Routes는 URL 요청신호를 받아서 매핑 후 연결, element 컴포넌트를 뷰에 렌더링 */}
      <Routes>
        <Route path="/home" element={<Home/>}/>
          {/* 서버프로젝트 내 경로가 중첩되어있는 경우 - Nested Routing */}
          {/* /topics/1 과 같은 url요청이 있는 경우 Topics 컴포넌트로 전부 보내서 Topics내부에서 처리
              components 요청하면서 props 전달  
          */}
        <Route path="/topics/*" element={<Topics contents={contents}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* 정의하지 않은 url 요쳥에 대한 처리, 그냥 정의안된 url싹다 거름.
        parsing해서 찾기 때문에 정의된 순서는 상관 없지만 가독성을 위해서 맨 아래에 놓는게 좋음.
        element는 문자열도 되고 따로 컴포넌트 만들어도 됨*/}
        <Route path='/*' element={'Not Found'}/>
      </Routes>
    </div>
  );
}

export default App;
