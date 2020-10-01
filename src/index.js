import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

const MyName = "Chander Bhanu's";
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
// alternate to <React.Fragment>- </React.Fragment> or [ - ]we can also use <> - </>
ReactDOM.render(
  <>
    <h1 contentEditable="true" >{MyName} Favourite Anime List</h1>
    <p>List Of Five Best Anime </p>
    <ol>
      <li>Fairy Tail</li>
      <li>The Misfit At the Demon Academy</li>
      <li>Naruto</li>
      <li>Attack On Titans</li>
      <li>Food Wars</li>
    </ol>
    <h1> Current date :{currentDate}</h1>
    <h1>current time : {currentTime}</h1>
    <img href="https://picsum.photos/200/300" alt= "img does not upload"></img>
  </>,
  document.getElementById('root')
);

