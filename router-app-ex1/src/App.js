import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Content from './components/Content';
import Book from './components/Book';
import {Link, Route, Routes} from 'react-router-dom';

const books =  [
  {
    "id": 1,
    "title": "달러구트 꿈 백화점",
    "author": "이미예",
    "price": 13500,
    "stock": 12,
    "genre": "소설",
    "description": "잠들어야만 입장할 수 있는 신비한 꿈 백화점 이야기"
  },
  {
    "id": 2,
    "title": "사피엔스",
    "author": "유발 하라리",
    "price": 19800,
    "stock": 8,
    "genre": "인문학",
    "description": "인류의 기원부터 현대 문명까지의 여정을 다룬 베스트셀러"
  },
  {
    "id": 3,
    "title": "아몬드",
    "author": "손원평",
    "price": 12000,
    "stock": 5,
    "genre": "한국소설",
    "description": "감정을 느끼지 못하는 소년이 세상과 관계를 맺어가는 이야기"
  },
  {
    "id": 4,
    "title": "클린 코드",
    "author": "로버트 C. 마틴",
    "price": 30000,
    "stock": 3,
    "genre": "프로그래밍",
    "description": "좋은 코드의 원칙과 실천 방법을 설명하는 프로그래머 필독서"
  },
  {
    "id": 5,
    "title": "죽음에 관하여",
    "author": "어빈 D. 얄롬",
    "price": 18000,
    "stock": 6,
    "genre": "심리학",
    "description": "삶의 끝에서 의미를 찾는 심리치료사 얄롬의 통찰"
  },
  {
    "id": 6,
    "title": "역행자",
    "author": "자청",
    "price": 16000,
    "stock": 15,
    "genre": "자기계발",
    "description": "삶을 바꾸는 사고방식과 성공 전략에 대한 안내서"
  },
  {
    "id": 7,
    "title": "불편한 편의점",
    "author": "김호연",
    "price": 14000,
    "stock": 9,
    "genre": "소설",
    "description": "서울 청파동의 작은 편의점에서 벌어지는 따뜻한 이야기"
  },
  {
    "id": 8,
    "title": "미드나잇 라이브러리",
    "author": "매트 헤이그",
    "price": 15500,
    "stock": 7,
    "genre": "판타지",
    "description": "삶과 죽음 사이 도서관에서 펼쳐지는 또 다른 삶의 선택들"
  },
  {
    "id": 9,
    "title": "공산당 선언",
    "author": "카를 마르크스",
    "price": 7000,
    "stock": 20,
    "genre": "사회과학",
    "description": "현대 사회와 정치의 뿌리를 이해할 수 있는 고전적 선언서"
  },
  {
    "id": 10,
    "title": "지적 대화를 위한 넓고 얕은 지식",
    "author": "채사장",
    "price": 17000,
    "stock": 10,
    "genre": "교양",
    "description": "철학, 정치, 경제를 한 번에 훑어보는 지식 입문서"
  }
]

function App() {
  return (
    <div className="wrap">
      <h1 className='title'>📖지식의 문을 여는 공간, 우리 도서관📖</h1>
      <hr/>
      <div className="buttons">
      <Link to="/">▷ 홈으로 ◁</Link> &nbsp;
      <Link to="/content">▶ 전체 도서 출력 ◀</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/content" element={<Content books={books}/>}></Route>
        <Route path="/bookDetail/:id" element={<Book books={books}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
