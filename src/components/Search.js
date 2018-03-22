import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import '../css/App.css';
import wikiSearch from '../utils/wikiApi';
import SearchBar from './SearchBar';
import ResultList from './ResultList';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      firstSearchDone: false,
    };
  }

  async doSearch(searchTerm) {
    // Calling the wikipedia API
    const results = await wikiSearch(searchTerm);
    if (results) {
      this.setState({
        searchResults: results.query.pages, // The results from the wiki api call
        firstSearchDone: true,
      });
    }
  }

  render() {
    // Debouncing the function so it doesnt get called too fast on input
    const doSearch = debounce(searchTerm => this.doSearch(searchTerm), 300);
    return (
      <div className="search-container">
        <SearchBar
          firstSearchDone={this.state.firstSearchDone} // Checks if the first search have been done
          onSearchTermChange={searchTerm => doSearch(searchTerm)} // Does the call to the API
        />
        <ResultList searchResults={this.state.searchResults} />
      </div>
    );
  }
}


export default Search;
