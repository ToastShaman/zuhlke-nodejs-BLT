var nock = require('nock');
var should = require('should');
var Currency = require('../currency');

describe('Currency', function() {

  it('should point to the right URL for downloading the currency rates', function() {
    new Currency().should.have.property('url', 'http://rate-exchange.appspot.com/currency?from=%s&to=%s');
  });

  describe('#getRate()', function() {
    it('should return the current currency rates for USD to GBP', function(done) {
      var reply = {to: 'GBP', rate: 0.60968800000000001, from: 'USD'};
      var rateExchange = nock('http://rate-exchange.appspot.com')
        .get('/currency?from=USD&to=GBP')
        .reply(200, reply);

      var converter = new Currency();
      
      converter.getRate('USD', 'GBP').then(function(data) {
        data.should.be.eql(reply);
        done();
      }).fail(function(err) {
        nock.cleanAll();
        throw err;
      });
    });
  });

  describe('#usdToGBP()', function() {
    it('should convert USD to GBP', function(done) {
      var reply = {to: 'GBP', rate: 0.60968800000000001, from: 'USD'};
      var rateExchange = nock('http://rate-exchange.appspot.com')
        .get('/currency?from=USD&to=GBP')
        .reply(200, reply);

      var converter = new Currency();
      
      converter.usdToGBP(100).then(function(amount) {
        amount.should.be.eql(60.9688);
        done();
      }).fail(function(err) {
        nock.cleanAll();
        throw err;
      });
    });
  });

});