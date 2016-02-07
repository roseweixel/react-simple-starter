import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Secrets from './secrets';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const YOUTUBE_KEY = Secrets.youtube_key;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = { videos: [] };

    YouTubeSearch({key: YOUTUBE_KEY, term: 'Bernie Sanders'}, (videos) => {
      this.setState({ videos });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[0] } />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
