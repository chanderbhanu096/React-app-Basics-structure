import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// alternate to <React.Fragment>- </React.Fragment> or [ - ]we can also use <> - </>
ReactDOM.render(
  <>
    <h1>Chander Bhanu's Favourite Anime List</h1>
    <p>List Of Five Best Anime </p>
    <ol>
      <li>Fairy Tail</li>
      <li>The Misfit At the Demon Academy</li>
      <li>Naruto</li>
      <li>Attack On Titans</li>
      <li>Food Wars</li>
    </ol>
  </>,
  document.getElementById('root')
);

