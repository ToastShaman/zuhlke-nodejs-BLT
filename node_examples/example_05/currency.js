var request = require('request');
var sprintf = require('sprintf');
var Q = require('q');

function Currency() {
  this.url = 'http://rate-exchange.appspot.com/currency?from=%s&to=%s';
}

Currency.prototype.getRate = function(from, to) {
  var deferred = Q.defer();
  request(sprintf(this.url, from, to), function(err, response, body) {
    if (err || response.statusCode !== 200) {
      return deferred.reject(new Error(err));
    }
    deferred.resolve(JSON.parse(body));
  });
  return deferred.promise;
}

Currency.prototype.usdToGBP = function(amount) {
  var deferred = Q.defer();
  this.getRate('USD', 'GBP').then(function(data) {
    if (!data.rate) {
      return deferred.reject(new Error(data));
    }
    deferred.resolve(amount * data.rate);
  });
  return deferred.promise;
};

module.exports = Currency;