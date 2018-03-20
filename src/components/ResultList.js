import React from 'react';
import ResultListItem from './ResultListItem';

const ResultList = ({ searchResults }) => {
  const ResultListItems = Object.keys(searchResults).sort((a, b) => (
    searchResults[a].index - searchResults[b].index
  )).map((index => (
    <ResultListItem
      key={searchResults[index].pageid}
      id={searchResults[index].pageid}
      searchResultTitle={searchResults[index].title}
      searchResultSnippet={searchResults[index].extract}
    />
  )));

  return (
    <div className="result-list-container">
      <ul className="result-list">
        {ResultListItems}
      </ul>
    </div>
  );
};

export default ResultList;
