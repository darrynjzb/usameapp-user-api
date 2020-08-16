const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('checkChannelMiddleware', () => {

    beforeEach(function () {
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false,
            useCleanCache: true
        });

    });

    afterEach(function () {
        mockery.disable();
        mockery.deregisterAll();
    });

    describe('checkChannelMiddleware middleware', () => {

      it('should return next() when  the x-flow-channel is correct', function () {
        let request = {};
        request.headers = {};
        request.headers['x-flow-channel'] = 'web';
        const nextSpy = sinon.spy();
        mockery.registerMock('../config',{
          context: { channel:'web' }
        });
        let middleware= require("./check-channel-middleware").checkChannelMiddleware;
        middleware(request,null,nextSpy);

        expect(nextSpy.called).to.be.true;
      });

      it('should return an error when the header is wrong ', function () {
        try {
          let request = {};
          request.headers = {};
          request.headers['x-flow-channel'] = 'web';
          let mockResponse = {
            setResponseWithError: () =>{

            }
          }
          const responseSpy = sinon.spy(mockResponse, 'setResponseWithError');
          mockery.registerMock('../util/common-response',mockResponse);
          mockery.registerMock('../config',{
            context: { channel:'other' }
          });

          let middleware= require("./check-channel-middleware").checkChannelMiddleware;
          middleware(request,null,null);
        } catch (e) {
          expect(e.status).to.be.equal(400);
          expect(e.code).to.be.equal("ERROR_CHANNEL_NOT_VALID");
        }
      });

    });
});
