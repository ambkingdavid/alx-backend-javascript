const request = require('request');
const { expect } = require('chai');

describe('API Tests', () => {
  const endpoint = 'http://localhost:7865';

  it('Returns the right status', function (done) {
    request(endpoint, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns the right content', function (done) {
    request(endpoint, function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  
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
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
