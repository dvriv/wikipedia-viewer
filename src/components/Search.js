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
    };
  }

  async doSearch(searchTerm) {
    const results = await wikiSearch(searchTerm);
    if (results) {
      this.setState({
        searchResults: results.query.pages,
      });
    }
  }

  render() {
    const doSearch = debounce(searchTerm => this.doSearch(searchTerm), 300);
    return (
      <div className="search-container">
        <h1>Wikipedia Viewer</h1>
        <SearchBar onSearchTermChange={searchTerm => doSearch(searchTerm)} />
        <ResultList searchResults={this.state.searchResults} />
        <span>Or get a random entry</span>
      </div>
    );
  }
}


export default Search;
