import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person';

import '../css/main.css';

const App = () => {
const personProp={
  name : "Shimrit",
  age : 36,
  kids : ["hill","aviad","emuna"]
}
  return (
    <div>
      <h1>Hello World</h1>
      <Person {...personProp} />
      
      </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
