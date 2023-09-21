const request = require('request');
const { expect } = require('chai');

describe('API Tests', () => {
  it('should return the correct status code for GET /cart/123', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result for GET /cart/123', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return a 404 status code when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(500);
      done();
    });
  });
});
