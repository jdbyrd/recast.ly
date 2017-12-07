
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.collection,
      selected: this.props.collection[0]
    };
    this.clicked = this.clicked.bind(this);
    this.onEnter = this.onEnter.bind(this);
    //this.changeSelected = this.changeSelected.bind(this);
    let results;
    
  }
  
  componentDidMount() {
    searchYouTube({query: 'Rick Roll', max: 10}, (videos) => {
      this.setState({videos: videos, selected: videos[0]});
      console.log(this.state.videos);
    });    
  }
  
  onEnter (string) {
    searchYouTube({query: string, max: 10}, (videos) => {
      this.setState({videos: videos, selected: videos[0]});
    }); 
  }
  
  clicked (string) {
    this.setState({
      selected: string
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onEnter={this.onEnter} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.selected} />
            <div className="col-md-4 commentBox"><p>Hello World</p></div>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.videos} clicked={this.clicked} />
          </div>
        </div>
      </div>
    );
  }
}


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
