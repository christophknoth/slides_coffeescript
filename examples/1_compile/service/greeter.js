// Generated by CoffeeScript 1.6.3
(function() {
  var serviceGreeter;

  serviceGreeter = (function() {
    function serviceGreeter() {}

    serviceGreeter.prototype.greet = function(name) {
      return 'hello!! ' + name;
    };

    return serviceGreeter;

  })();

  if (typeof module !== "undefined") {
    module.exports = serviceGreeter;
  }

}).call(this);

/*
//@ sourceMappingURL=greeter.map
*/
