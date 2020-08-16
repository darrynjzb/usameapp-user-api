const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

describe('checkCommerceMiddleware', () => {

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

    describe('checkCommerceMiddleware middleware', () => {

      it('should return next() when  the x-flow-commerce is correct', function () {
        let request = {};
        request.headers = {};
        request.headers['x-flow-commerce'] = 'banco';
        const nextSpy = sinon.spy();
        mockery.registerMock('../config',{
          context: { commerce:'banco' }
        });
        let middleware= require("./check-commerce-middleware").checkCommerceMiddleware;
        middleware(request,null,nextSpy);

        expect(nextSpy.called).to.be.true;
      });

      it('should return an error when the header is wrong ', function () {
        try {
          let request = {};
          request.headers = {};
          request.headers['x-flow-commerce'] = 'web';
          let mockResponse = {
            setResponseWithError: () =>{

            }
          }
          const responseSpy = sinon.spy(mockResponse, 'setResponseWithError');
          mockery.registerMock('../util/common-response',mockResponse);
          mockery.registerMock('../config',{
            context: { commerce:'other' }
          });

          let middleware= require("./check-commerce-middleware").checkCommerceMiddleware;
          middleware(request,null,null);
        } catch (e) {
          expect(e.status).to.be.equal(400);
          expect(e.code).to.be.equal("ERROR_COMMERCE_NOT_VALID");
        }
      });

    });
});
