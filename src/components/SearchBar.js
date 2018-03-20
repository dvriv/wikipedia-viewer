import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
      this.props.onSearchTermChange(searchTerm);
      console.log(this.state.searchTerm);
      console.log('onInputChange event happened!');
    
  }

  render() {
    return (
      <div className="search-bar-container">
        <input
          value={this.state.searchTerm}
          onChange={event => { 
            this.onInputChange(event.target.value);
            console.log('Input changed!');
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
