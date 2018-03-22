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
    const results = await wikiSearch(searchTerm);
    if (results) {
      this.setState({
        searchResults: results.query.pages,
        firstSearchDone: true,
      });
    }
  }

  render() {
    const doSearch = debounce(searchTerm => this.doSearch(searchTerm), 300);
    return (
      <div className="search-container">
        <SearchBar
          firstSearchDone={this.state.firstSearchDone}
          onSearchTermChange={searchTerm => doSearch(searchTerm)}
        />
        <ResultList searchResults={this.state.searchResults} />
      </div>
    );
  }
}


export default Search;
