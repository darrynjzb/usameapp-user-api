const mockery = require('mockery');
const chai = require('chai');
const expect = chai.expect;

describe('Commons Errors', () => {

  let client = null;

  beforeEach(function () {
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

  afterEach(function () {
    mockery.disable();
    mockery.deregisterAll();
  });

  describe("generals test", () => {

    it("should Create", async () => {
      const { AppError } = require('./common-errors');
      const error = new AppError('code', 'message', 'metadata');
      expect(error.code).to.be.equal('code');
      expect(error.message).to.be.equal('message');
      expect(error.metadata[0]).to.be.equal('metadata');
    });

    it("should add metadata", async () => {
      const { AppError } = require('./common-errors');
      const error = new AppError('code', 'message', 'metadata');
      error.addMetadata('metadata2');
      expect(error.code).to.be.equal('code');
      expect(error.message).to.be.equal('message');
      expect(error.metadata[0]).to.be.equal('metadata2');
      expect(error.metadata[1]).to.be.equal('metadata');
    });

    it("should add metadata when if change metadata", async () => {
      const { AppError } = require('./common-errors');
      const error = new AppError('code', 'message', 'metadata');
      error.metadata = 'metadata2';
      error.addMetadata('metadata3');
      expect(error.code).to.be.equal('code');
      expect(error.message).to.be.equal('message');
      expect(error.metadata[0]).to.be.equal('metadata3');
      expect(error.metadata[1]).to.be.equal('metadata2');
    });

    it("should add when metadata is array", async () => {
      const { AppError } = require('./common-errors');
      const error = new AppError('code', 'message', ['metadata']);
      expect(error.code).to.be.equal('code');
      expect(error.message).to.be.equal('message');
      expect(error.metadata[0]).to.be.equal('metadata');
    });

    it("should add when is array the metadata", async () => {
      const { AppError } = require('./common-errors');
      const error = new AppError('code', 'message', ['metadata']);
      error.addMetadata(['metadata2']);
      expect(error.code).to.be.equal('code');
      expect(error.message).to.be.equal('message');
      expect(error.metadata[0]).to.be.equal('metadata2');
      expect(error.metadata[1]).to.be.equal('metadata');
    });

    it("should add when is a object the metadata", async () => {
      const { AppError } = require('./common-errors');
      const error = new AppError('code', 'message', { 'metadata': 'dummy' });
      error.addMetadata(['metadata2']);
      expect(error.code).to.be.equal('code');
      expect(error.message).to.be.equal('message');
      expect(error.metadata[0]).to.be.equal('metadata2');
      expect(error.metadata[1].metadata).to.be.equal('dummy');
    });

    it("should add two object in the metadata", async () => {
      const { AppError } = require('./common-errors');
      const error = new AppError('code', 'message', { 'metadata': 'dummy' });
      error.addMetadata({ 'metadata2': 'dummy' });
      expect(error.code).to.be.equal('code');
      expect(error.message).to.be.equal('message');
      expect(error.metadata[0].metadata2).to.be.equal('dummy');
      expect(error.metadata[1].metadata).to.be.equal('dummy');
    });
  });

  describe("test status erros", () => {
    it("all codes", async () => {
      const {
        BadRequestError,
        UnauthorizedError,
        ForbiddenError,
        NotFoundError,
        TimeoutError,
        ConnectionError,
        AppError
      } = require('./common-errors');
      const error1 = new AppError('code', 'message', { 'metadata': 'dummy' });
      const error2 = new BadRequestError('code', 'message', { 'metadata': 'dummy' });
      const error3 = new UnauthorizedError('code', 'message', { 'metadata': 'dummy' });
      const error4 = new ForbiddenError('code', 'message', { 'metadata': 'dummy' });
      const error5 = new NotFoundError('code', 'message', { 'metadata': 'dummy' });
      const error6 = new TimeoutError('code', 'message', { 'metadata': 'dummy' });
      const error7 = new ConnectionError('code', 'message', { 'metadata': 'dummy' });

      expect(error1.status).to.be.equal(500);
      expect(error2.status).to.be.equal(400);
      expect(error3.status).to.be.equal(401);
      expect(error4.status).to.be.equal(403);
      expect(error5.status).to.be.equal(404);
      expect(error6.status).to.be.equal(408);
      expect(error7.status).to.be.equal(500);
    });
  });
});
