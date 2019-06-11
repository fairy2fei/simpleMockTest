//const app = require('.app');
const assert = require("assert");
const httpMocks = require("node-mocks-http");
const movieAPIHandler = require("./movie-api");
describe("Example",() => {

    it("should return 'tt1201607' for GET /",  async() => {
      const mockRequest = httpMocks.createRequest({
        method: "GET",
        url: "/"
      });
      const mockResponse = httpMocks.createResponse();
      movieAPIHandler(mockRequest, mockResponse);
      const actualResponseBody = mockResponse._getData();
      const expectedResponseBody = "tt1201607";
      assert(actualResponseBody, expectedResponseBody);
    });
  
  });
/*var events = require('events').EventEmitter;
const httpMocks = require('node-mocks-http');

//var request = require("supertest");
test('It should response the GET method', (done) => {
    var req = httpMocks.createRequest({
        method: 'GET',
        url: '/'
    });
    var res = httpMocks.createResponse({events: events});
    // const response = httpMocks.createResponse();
    const getFunction = require('./index');
    getFunction(req, res);
    console.log(res._getJSONData());
    res.on('end', () => {
        console.log(res._getData());
        done();
      });
    res.on('send', () => {
        console.log(res._getData());
        done();
    });
    /*console.log(response);
    var data = response._getData();
    console.log(data);
    //console.log(response._getJSONData());
    expect(response._getData()).toBe('tt1201607');*/
    /*request(app).get('/').then((response) => {
        expect(response.text).toBe('tt1099212');
        done();
    });
    
}, 10000);*/