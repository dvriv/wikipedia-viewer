import fetch from 'node-fetch';

const wikiSearch = async (searchTerm, offset = 0) => {
  if (searchTerm) {
    const apiURL = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=${searchTerm}&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=2&exlimit=max&gsroffset=${offset}`
    const response = await fetch(apiURL, {
      headers: {
        'Api-User-Agent': 'wiki-viewer/1.0',
        'content-type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  }
  console.log('No Search term specified');
  return new Error('No search term specified');
};

export default wikiSearch;
