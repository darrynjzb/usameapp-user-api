const mockery = require('mockery');

const chai = require('chai');

const expect = chai.expect;

process.env.NODE_ENV = 'local';

describe('index route', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });

  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });

  describe('getConfiguration function', () => {

    it('should return the local configuration ', () => {
      const fsMock = {
        readdirSync: () => {
          return ['index.js', 'index.spec.js', 'test-route.js']
        }
      };

      const routerMock = {
        Router: () => {
          return {
            use: (a, b) => {
              return 'Hi';
            }
          }
        }
      };
      mockery.registerMock('fs', fsMock);
      mockery.registerMock('express', routerMock);
      mockery.registerMock('./test-route.js', fsMock);
      process.env.NODE_ENV = 'local';
      const router = require('./index');
      expect(router).to.be.an('object');
      expect(router.use).to.be.an('function');
    });
  });

});
