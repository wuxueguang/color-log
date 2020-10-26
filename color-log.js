'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var type = function type(arr) {
  return /^\[object (.*)\]/.exec(Object.prototype.toString.call(arr))[1].toLowerCase();
};

var styleStr = function styleStr(styleObj) {
  return Object.keys(styleObj).reduce(function (styleStr, name) {
    return styleStr + "".concat(name.replace(/[A-Z]/g, function (c) {
      return "-".concat(c.toLowerCase());
    }), ":").concat(styleObj[name], ";");
  }, '');
};

var log = function log() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (type(args[0]) === 'string') {
    var _console;

    (_console = console).log.apply(_console, ["%c".concat(args[0]), this.style].concat(_toConsumableArray(args.slice(1))));
  } else {
    if (type(args[0]) === 'object' && args[0].isLogStyle) {
      Object.assign(this.styleObj, args[0]);
      this.style = styleStr(this.styleObj);
      args.length > 1 && this.apply(this, args.slice(1));
    } else {
      var _console2;

      (_console2 = console).log.apply(_console2, args);
    }
  }
};

log.styleObj = {
  color: '#0f0',
  background: '#000',
  fontWeight: 'bold',
  fontSize: '12px'
};
log.style = styleStr(log.styleObj);
var main = log.bind(log);
module.exports = main;
