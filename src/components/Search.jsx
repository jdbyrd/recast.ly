class Search extends React.Component {
  constructor (props) {
    super(props);
  }
  
  handleKeyPress(event) {
    if (event.charCode === 13) {
      // event.preventDefault();
      // event.stopPropagation();
      return this.props.onEnter($('.form-control').val());
    }
  }
  
  render () {
    return (
      <div className="search-bar form-inline">
        <input onKeyPress={(event) => this.handleKeyPress(event)} className="form-control" type="text" />
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
