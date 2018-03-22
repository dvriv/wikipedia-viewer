import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  handlerInputChange(searchTerm) {
    this.setState({ searchTerm });
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
        { !this.props.firstSearchDone && <span>Or get a random entry</span> }
      </div>
    );
  }
}

export default SearchBar;
