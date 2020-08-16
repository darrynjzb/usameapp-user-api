const chai   = require('chai');
const expect = chai.expect;
const mockery = require('mockery');

describe('getMiddleware', () => {

  beforeEach(function () {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });

  afterEach(function () {
    client = null;
    redisConnection = null;
    state = null;
    mockery.disable();
    mockery.deregisterAll();
  });

  describe('getMiddlewares function', () => {

    it("should return a middleware function", function () {
      mockery.registerMock('./../middlewares/my-middleware', {
        myMiddleware: (req, res, next) => {
        }
      });
      const getMiddlewares = require("./get-middleware").getMiddlewares;
      const result = getMiddlewares(["my-middleware"]);
      expect(result[0].name).to.be.equal("myMiddleware")
    });

    it("should return an error when the middleware does not exist", function () {
      mockery.registerMock('./../middlewares/my-middleware', {
        myMiddleware: (req, res, next) => {
        }
      });
      const getMiddlewares = require("./get-middleware").getMiddlewares;
      try{
        getMiddlewares(["my-middleware-not-exist"]);
      } catch (e) {
        expect(e.message).to.be.contain("Cannot find module")
      }

    });

  });

});
