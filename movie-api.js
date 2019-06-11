var request = require("request");
let data;
var query = 'Harry Potter';
var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=1ef32cde';
request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
         data = JSON.parse(body)['Search'][0]['imdbID'];
    }
}); 
function movieAPIHandler(req, res) {
        res.send(data);
}
  
module.exports = movieAPIHandler;
  