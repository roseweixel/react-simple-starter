import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Secrets from './secrets';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const YOUTUBE_KEY = Secrets.youtube_key;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Bernie Sanders');
  }

  videoSearch (term) {
    YouTubeSearch({ key: YOUTUBE_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
