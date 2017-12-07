class Search extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div className="search-bar form-inline">
        <input onChange={(event) => this.props.onEnter($('.form-control').val())} className="form-control" type="text" />
        <button onClick={() => this.props.onEnter($('.form-control').val())} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
  

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
