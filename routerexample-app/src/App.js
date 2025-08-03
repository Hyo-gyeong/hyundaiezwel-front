import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import MovieInfo from './components/MovieInfo';
import {Routes, Route, Link} from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

const movie =[
  {id:1, title:'스파이더맨 노 웨이 홈', director:'존 왓츠',actor: '톰 홀랜드', year:'2021-12-15', genre:'액션' },
  {id:2, title:'킹스맨 : 퍼스트 에이전트', director:'매튜 본',actor: '팔프 파인즈', year:'2021-12-22', genre:'액션' }
]

function App() {
  return (
    <div className='wrap'>
      <ul className='menu'>
        <li><Link to="/">홈 화면 보기</Link></li>
        <li><Link to="/about">About 화면 보기</Link></li>
        <li><Link to="/movieInfo">영화정보 보기</Link></li>
        {/* <li><Link to="/movieDetail/king">킹스맨</Link></li>
        <li><Link to="/movieDetail/spider">스파이더맨</Link></li>
        <li><Link to="/movieDetail/squid">오징어게임</Link></li> */}
         {/*
         Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers
         신뢰할 수 없는 페이지에 대해서 실행 주체에 부하가 걸린다는 warning 
         실행 주체는 브라우저와 독립이고 연결은 새로 여는 창과 끊어지도록(?) rel="noreferrer noopener" 설정
         noopener : 새 창에서 부모 창(window.opener)에 접근하지 못하게 막는 속성, 부모 창을 조작하거나 악성 스크립트를 삽입하는 것을 방지
         noreferrer : 현재 페이지의 URL(리퍼러 정보)을 새 창에 전달하지 않음 즉 새 창에서 원래 페이지를 조작하지 못하게함. 개인정보 보호
         */}
        <li><a href="https://movie.naver.com" target='_blank' rel="noreferrer noopener">네이버 영화</a></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}></Route>  
        <Route path="/about" element={<About/>}></Route>  
        <Route path="/movieInfo" element={<MovieInfo movie={movie}/>}></Route>  
        <Route path="/movieDetail/:keyword" element={<MovieDetail movie={movie}/>}></Route>  
      </Routes>
    </div>
  );
}

export default App;
