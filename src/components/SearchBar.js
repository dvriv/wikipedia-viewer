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
        <input
          value={this.state.searchTerm}
          onChange={(event) => { 
            this.handlerInputChange(event.target.value);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
