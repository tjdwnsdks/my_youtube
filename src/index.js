import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 


/* 추가 -  src > assets > scss 폴더 구성 끝나고 와서 하기 */
import './assets/scss/style.scss';

/* 이거 하고 github에 올리기
 git add .
 git status  <=  새로 올라가는 파일들 리스트 확인 가능

 */


// 이거 하고 App.js 가기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 