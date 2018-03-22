import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  handlerInputChange(searchTerm) {
    // Sets the state from the input
    this.setState({ searchTerm });
    // then check if the input isn't only white spaces, then calls the Wiki API function
    if (searchTerm.trim() !== '') {
      this.props.onSearchTermChange(searchTerm);
    }
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar-title">
          <h1>Wikipedia Viewer</h1>
        </div>
        <input
          value={this.state.searchTerm}
          onChange={(event) => {
            this.handlerInputChange(event.target.value);
          }}
        />
        { !this.props.firstSearchDone && <span className="get-random-entry"><a href="https://en.wikipedia.org/wiki/Special:Random">Or get a random entry</a></span> }
      </div>
    );
  }
}

export default SearchBar;
