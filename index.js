const express = require("express");
const movieAPI = require("./movie-api");
const app = express();

app.use("/", movieAPI);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/*
var express = require("express");
var request = require("request");
// var app = express();
const router = express.Router();
router.get('/', getFunction);
function getFunction(req, res){
        var query = 'Harry Potter';
        var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=1ef32cde';
        console.log(url);
        request(url, function(error, response, body){
            if(!error && response.statusCode == 200){
                var data = JSON.parse(body);
                return res.json(data['Search'][0]['imdbID']);
                //res.send(data['Search'][0]['imdbID']);
            }
        });
};
/*
exports.getFunction = (req, res) =>{
    var query = 'Harry Potter';
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=1ef32cde';
   console.log(url);
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);

            res.send(data['Search'][0]['imdbID']);
        }
    });
};
module.exports = router;*/