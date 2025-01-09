import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

/* 할일: 총 12개의 페이지(아래 있는거)를 만들고 연결할거임 
      근데 아래 import 부분처럼 일일이 하나씩 하게되면 
      만약 페이지가 100개일때 각각의 페이지가 로드 될때마다 100개를 다 처리하고 페이지가 불러진다. 그럼 너무 느려진다.
      그래서 코드 스플리팅 이라는걸 쓸거임
      ("코드 스플리팅" 이란 해당 페이지가 필요할때까지 로딩하지 않는것임.)
*/
// import Home from './pages/Home'
// import Today from './pages/Today'
// import Developer from './pages/Developer'
// import Webd from './pages/Webd'
// import Website from './pages/Website'
// import Gsap from './pages/Gsap'
// import Port from './pages/Port'
// import Youtube from './pages/Youtube'
// import Channel from './pages/Channel'
// import Video from './pages/Video'
// import Search from './pages/Search'
// import Not from './pages/Not'


/* 코드 스플리팅 - lazy loading */
const Home = lazy(() => import ('./pages/Home'))
const Today = lazy(() => import ('./pages/Today'))
const Developer = lazy(() => import ('./pages/Developer'))
const Webd = lazy(() => import ('./pages/Webd'))
const Website = lazy(() => import ('./pages/Website'))
const Gsap = lazy(() => import ('./pages/Gsap'))
const Port = lazy(() => import ('./pages/Port'))
const Youtube = lazy(() => import ('./pages/Youtube'))
const Channel = lazy(() => import ('./pages/Channel'))
const Video = lazy(() => import ('./pages/Video'))
const Search = lazy(() => import ('./pages/Search'))
const Not = lazy(() => import ('./pages/Not'))



const Loading = <div className={'bg-red-700'}>Loding...</div>

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Routes> {/* BrowserRouter 내에서 사용되며, 다양한 경로에 대한 라우트 정보를 정의합니다 */}
          <Route path='/' element={<Home />} /> {/*  경로가 '/'인 경우, Home 컴포넌트를 렌더링합니다 */}
          <Route path='/today' element={<Today />} /> 
          <Route path='/developer' element={<Developer />} /> 
          <Route path='/webd' element={<Webd />} /> 
          <Route path='/website' element={<Website />} /> 
          <Route path='/gsap' element={<Gsap />} /> 
          <Route path='/port' element={<Port />} /> 
          <Route path='/youtube' element={<Youtube />} /> 
          <Route path='/channel/:channelId' element={<Channel />} /> 
          {/* (:은 pathVariable 이란 뜻. /channel/{숫자} 올건데 그건 channelId 라고 변수명을 정해준거임) */}
          <Route path='/video/:videoId' element={<Video />} /> 
          <Route path='/search/:searchId' element={<Search />} /> 
          <Route path='*' element={<Not />} /> 
        </Routes>
      </Suspense>
    </BrowserRouter>


    // <BrowserRouter> {/* 리액트 라우터의 BrowserRouter 컴포넌트로 감싸여 있습니다. 이 컴포넌트는 브라우저의 주소 히스토리 API를 사용하여 라우팅을 관리합니다. */}
    //     <Routes> {/* BrowserRouter 내에서 사용되며, 다양한 경로에 대한 라우트 정보를 정의합니다 */}
    //         <Route path='/' element={<Home />} /> {/*  경로가 '/'인 경우, Home 컴포넌트를 렌더링합니다 */}
    //         <Route path='/today' element={<Today />} /> 
    //         <Route path='/developer' element={<Developer />} /> 
    //         <Route path='/webd' element={<Webd />} /> 
    //         <Route path='/website' element={<Website />} /> 
    //         <Route path='/gsap' element={<Gsap />} /> 
    //         <Route path='/port' element={<Port />} /> 
    //         <Route path='/youtube' element={<Youtube />} /> 
    //         <Route path='/channel/:channelId' element={<Channel />} /> 
    //         <Route path='/video/:videoId' element={<Video />} /> 
    //         <Route path='/search/:searchId' element={<Search />} /> 
    //         <Route path='*' element={<Not />} /> 
    //     </Routes>
    // </BrowserRouter>




/* 다 하고 github에 올리기
    터미널에서 
    1) 'git add .'  하고
    2) 'git status' 로 변경들 확인
    3) 'git commit -m "페이지 만들기" 
    4) 'git push -u origin main' 하고
    5) 깃허브에서 올라간거 확인하고
    6) 브런치 만들기 (05-페이지만들기 )
    

다 하면  src 폴더에 pages 폴더 만들어서 페이지 컴포넌트들 만들기

components 폴더 생성
*/


);
}

export default App
