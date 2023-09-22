const request = require('request');
const { expect } = require('chai');

describe('API Tests', () => {
  it('should return the correct status code for GET /', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return the correct result for GET /cart/123', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  describe('Cart Page Tests', () => {
    it('should return a 200 status code when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/123', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return a 404 status code when :id is NOT a number', (done) => {
      request.get('http://localhost:7865/cart/abc', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('Available Payments Tests', () => {
    it('should return the correct payment methods', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const data = JSON.parse(body);
        expect(data).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('Login Tests', () => {
    it('should return the welcome message with the username', (done) => {
      const username = 'JohnDoe';
      request.post(
        {
          url: 'http://localhost:7865/login',
          json: { userName: username },
        },
        (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal(`Welcome ${username}`);
          done();
        }
      );
    });
  });
});
