const mockery = require('mockery');

const chai = require('chai');

const expect = chai.expect;

describe('config', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    let logger = {
      info: () => {},
      debug: () => {},
      warn: () => {},
      error: () => {},
      fatal: () => {},
      obfuscate: () => {}
    }

    mockery.registerMock('fif-payments-common-logger', logger);
  });

  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });

  describe('config all environments', () => {

    it('should have the same number of fields', () => {
      const envs  =  ["local", "test", "qa", "prod"]
      envs.forEach((env) => {
        let config = require(`./config.${env}`);
        expect(config).to.have.property('redisConfig');
        expect(config.redisConfig).to.have.property('port');
        expect(config.redisConfig).to.have.property('server');
        expect(config.redisConfig).to.have.property('pass');
        expect(config.redisConfig).to.have.property('ttl');
        config =null;
      });

    });

  });
});
