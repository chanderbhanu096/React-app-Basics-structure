import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// alternate to <React.Fragment>- </React.Fragment> or [ - ]we can also use <> - </>
ReactDOM.render(
  <>
    <h1>Welcome to React Basics</h1>,
    <ol><li>Hello</li><li>Hello World</li></ol>,
    <h2>Bye</h2>
  </>,
  document.getElementById('root')
);

