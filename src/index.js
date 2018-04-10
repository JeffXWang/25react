import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


let theArray=[]
function tick() {
  theArray.push(Math.floor(Math.random()*50))
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {theArray.map(d=>(<div>the number is {d}</div>))}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
//  new  Constructor is important.  Otherwise, will stop
setInterval(tick, 1000);
