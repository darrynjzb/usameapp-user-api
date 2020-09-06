const mockery = require('mockery');
const Joi = require('joi');
const chai = require('chai');

const expect = chai.expect;

describe('client', () => {
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

  describe('client schema', () => {

    it('should not return an error', () => {
      const schema = require('./client').client;
      const body = {
        id: '14216541',
        name: 'name',
        mail: 'aaa@sas.com'
      };
      const result = Joi.validate(body, schema);
      console.info(result.error);
      expect(result.error).to.be.null;
    });

    it('should return an error', () => {
      const schema = require('./client').client;
      const body = {
        id: '11111',
        name: 'name',
        mail: 'aaasas.com'
      };
      const result = Joi.validate(body, schema);
      expect(result.error).to.be.not.null;
    });

  });

});
