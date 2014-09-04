var Q = require('q');

var taskFunction = function(timeout) {
  var deferred = Q.defer();
  setTimeout(function() {
    deferred.resolve(timeout);
  }, timeout);
  return deferred.promise;
}

var start = new Date().getTime();
Q.all([taskFunction(500), taskFunction(100)]).then(function(values) {
  var end = new Date().getTime();
  console.log('Execution time: ' + (end - start));
});
