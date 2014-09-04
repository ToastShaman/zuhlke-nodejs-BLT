var Q = require('q');

function taskFunction(timeout) {
  var deferred = Q.defer();
  setTimeout(function() {
    deferred.resolve(timeout);
  }, timeout);
  return deferred.promise;
}

var start = new Date().getTime();

taskFunction(100)
.then(function(timeout) {
  return taskFunction(timeout + 500);
})
.then(function(data) {
  console.log('The last resolved value was: ' + data);
  var end = new Date().getTime();
  console.log('Execution time: ' + (end - start));
});
