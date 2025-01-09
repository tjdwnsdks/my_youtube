import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 


/* 추가 -  src > assets > scss 폴더 구성 끝나고 와서 하기 */
import './assets/scss/style.scss';

/* 이거 하고 github에 올리기
      git add .
      git status  <=  새로 올라가는 파일들 리스트 확인 가능
      git commit -m "SCSS 세팅"
      git push -u origin main
  이거 하고 깃허브 홈페이지 가서 확인해보면 됨
  하고 새 브런치 '04-SCSS 세팅' 만들기

  (해보면 이제부터 각 브런치 마다 버전별로 코드 볼 수 있다.)
 */



  /* 다 하면 App.js 가서 BrowserRouter 걸기  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 