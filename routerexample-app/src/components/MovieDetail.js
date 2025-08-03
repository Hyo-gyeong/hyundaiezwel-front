import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    spider: {
        title: "스파이더맨 노 웨이 홈",
        director: "존 왓츠",
        actor: "톰 홀랜드",
        date: "2021-12-15",
        genre: "액션",
    },
    king: {
        title: "킹스맨 : 퍼스트 에이전트",
        director: "메튜 본",
        actor: "랄프 파인즈",
        date: "2021-12-22",
        genre: "액션",
    },
};

const MovieDetail = (props) => {
  const params = useParams(); // 앞서 path에 변수명으로 전달한 값이 object타입으로 값이 들어옴
  const movie_ar = props.movie;
  // params 에서 전달된 keyword가 data내에 존재하면 data반환, 없으면 undefined로 반환됨
  const movie = movie_ar[Number(params.keyword)-1];
  if (!movie) {
    return <div>영화 정보가 없습니다.</div>
  }
  return (
    <div>
      <hr/>
      <h3>{params.keyword} : {movie.title}</h3>
      <p>감독 : {movie.director}</p>
      <p>배우 : {movie.actor}</p>
      <p>개봉일 : {movie.data}</p>
      <p>장르 : {movie.genre}</p>
    </div>
  );
};

export default MovieDetail;