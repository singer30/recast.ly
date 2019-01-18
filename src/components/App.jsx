import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: [],
      currentVideo: exampleVideoData[0],
      query: ''
    };

    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
    this.changeQuery = this.changeQuery.bind(this);
  }

  componentDidMount() {
    searchYouTube({query: 'golden retrievers', max: 10, key: YOUTUBE_API_KEY}, (data) => {
      this.setState({
        allVideos: data.items,
        currentVideo: data.items[0]
      });
    });
  }

  changeCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  changeQuery(event) {
    this.setState({
      query: event.target.value
    }, () => {
      searchYouTube({query: this.state.query, max: 10, key: YOUTUBE_API_KEY}, (data) => {
        this.setState({
          allVideos: data.items,
          currentVideo: data.items[0]
        });
      });
    }); 
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search changeQuery={this.changeQuery} value={this.state.query} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} changeCurrentVideo={this.changeCurrentVideo}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
