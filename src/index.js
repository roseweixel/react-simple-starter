import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that produces some HTML
// this is a class, not an instance
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it in the DOM
// We need to instantiate our component before we render it
ReactDOM.render(<App />, document.querySelector('.container'));
