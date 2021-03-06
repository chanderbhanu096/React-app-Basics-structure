import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MyName = "Chander Bhanu's";
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const inlineCss ={
  color:'	#FF0000',
  textTransform:'capitalize'
}
// alternate to <React.Fragment>- </React.Fragment> or [ - ]we can also use <> - </>
ReactDOM.render(
  <>
    <h1 className= "heading" >{MyName} Favourite Anime List</h1>
    <p>List Of Five Best Anime </p>
    <ol>
      <li className = "list_items">Fairy Tail</li>

       {/* One Way of writing inline CSS :passing css properties as an object*/}
      <li style={inlineCss}>the Misfit At the Demon Academy</li> 

      {/* second way of passing css properties is passing those  like object directly i.e.{object} and object = {css properties} */}
      <li style={{color:'	#FF0000',textTransform:'capitalize'}}>Naruto</li>
      <li>Attack On Titans</li>
      <li>Food Wars</li>
    </ol>
    <h1> Current date :{currentDate}</h1>
    <h1>current time : {currentTime}</h1>
    <img href="https://picsum.photos/200/300" alt= "img does not upload"></img>
  </>,
  document.getElementById('root')
);

