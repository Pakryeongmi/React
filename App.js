import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['인기 영화 추천', '최신 영화 추천', 'TOP10 영화']); 
  /* useState 함수를 사용하면 [a,b] array(배열) 발생
     (실제 데이터(useState)가 a로 데이터를 수정하기 위한 함수가 b*/ 
  let [따봉, 따봉변경] = useState(0);
  let [따봉1, 따봉변경1] = useState(0);
  let [별로, 별로변경] = useState(0);

  function 제목바꾸기() {
    var newData = [...글제목];
    newData[2] = '로맨스 영화 추천';
    글제목변경(newData);
  }

  // function 제목정렬하기() {
  //   var abc = 
  //   글제목변경();
  // }

  let posts = '강남 고기 맛집'; /*데이터 받아오는 서버*/
  let color = {color:'red', fontSize:'30px'};

  return (
    <div className="App">
      <div className='menu-bar'>
        <div style={ color }>Movie</div>
      </div>
      <div className='list'>
        {/* <button onClick={ 제목정렬하기 }>정렬</button> */}
        <h2> { 글제목[1] } <span onClick={ ()=>{따봉변경(따봉+1)} }>👍🏻</span> {따봉} </h2>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h2> { 글제목[0] } <span onClick={ ()=>{따봉변경1(따봉1+1)} }>👍🏻</span> {따봉1} <span onClick={ ()=>{별로변경(별로+1)} }>👎🏻</span> {별로} </h2>
        <p>2월 18일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h2> { 글제목[2] } </h2>
        <p>2월 19일 발행</p>
        <button onClick={ 제목바꾸기 }>변경</button>
        <hr/>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
