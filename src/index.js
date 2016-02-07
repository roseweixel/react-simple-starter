import React from 'react';
import ReactDOM from 'react-dom';
import Secrets from './secrets';
import SearchBar from './components/search-bar';

const YOUTUBE_KEY = Secrets.youtube_key;

// Create a new component that produces some HTML
// this is a class, not an instance
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it in the DOM
// We need to instantiate our component before we render it
ReactDOM.render(<App />, document.querySelector('.container'));
