describe("Example", () => {
  let app;

  afterEach(() => {
    app = undefined;
    // Restore library mocks
    jest.resetModules();
  });

  it("it should fail",  async() => {
    jest.mock('request-promise-native', () => () => Promise.reject('mockedError'));
    app = require('./movie-api');
    await expect(app()).rejects.toThrow('mockedError');
  });

  it("it should return something",  async() => {
    jest.mock('request-promise-native', () => () => Promise.resolve('{"Search":[{"imdbID":"customId"}]}'));
    app = require('./movie-api');
    await expect(app()).resolves.toBe('customId')
  });

});