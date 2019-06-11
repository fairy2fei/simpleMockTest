const query = 'Harry Potter';
const url = 'https://www.omdbapi.com/?s=' + query + '&apikey=1ef32cde';
const rp = require('request-promise-native');

async function apiCall() {
  try {
    const body =  await rp(url)
    const result = JSON.parse(body)['Search'][0]['imdbID'];
    return result;
  } catch (err) {
    throw Error(err);
  }
}

module.exports = apiCall;
