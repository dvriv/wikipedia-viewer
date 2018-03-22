import fetch from 'node-fetch';

const wikiSearch = async (searchTerm, offset = 0) => {
  if (searchTerm) {
    try {
      const apiURL = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=${searchTerm}&gsrlimit=20&prop=extracts&exintro&explaintext&exsentences=2&exlimit=max&gsroffset=${offset}`;
      const response = await fetch(apiURL, {
        headers: {
          'Api-User-Agent': 'wiki-viewer/1.0',
          'content-type': 'application/json',
        },
      });

      const data = await response.json();
      return data;
    }
    catch (error) {
      throw Error('Error when getting a response from the Wikipedia API');
    }
  }
  throw Error('No search term specified');
};

export default wikiSearch;
