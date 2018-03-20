import React from 'react';

const ResultListItem = (props) => {
  return (
    <li className="result-list-item">
      <div className="result-list-item-title"><a href={`https://en.wikipedia.org/?curid=${props.id}`}>{props.searchResultTitle}</a></div>
      <div className="result-list-item-description">{props.searchResultSnippet}</div>
    </li>
  );
};

export default ResultListItem;
