var Currency = require('./currency');

var currency = new Currency();

currency.usdToGBP(100)
.then(function(amount) {
  console.log('100 USD = ' + amount + ' GBP');
}).fail(function(err) {
  console.error(err);
});
