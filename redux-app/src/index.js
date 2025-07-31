import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import reducer from './components/reducer';
import {configureStore} from '@reduxjs/toolkit';

// store 생성
// createStore(reducer) → Provider로 연결 → 그 후 useSelector로 조회하고 useDispatch로 수정하는 구조
const store = configureStore({reducer:reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
