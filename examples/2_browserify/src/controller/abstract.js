// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = (function() {
    function _Class() {}

    _Class.prototype.getDom = function() {
      return this.dom;
    };

    _Class.prototype.dispatch = function(req) {
      if (req.action == null) {
        req.action = 'index';
      }
      if (typeof req.controller === "undefined") {
        throw {
          msg: 'request needs a controller',
          request: req
        };
      }
      if (!this[req.action + 'Action']) {
        throw {
          msg: 'action ' + req.action + 'Action' + ' for controller ' + req.controller + ' doesn\'t exists',
          request: req
        };
      }
      this.dom = req.dom || {};
      return this[req.action + 'Action'](req);
    };

    return _Class;

  })();

}).call(this);

/*
//@ sourceMappingURL=abstract.map
*/
