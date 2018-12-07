"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Instant extends _react.default.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://instant.0xproject.com/instant.js";
    document.head.appendChild(script);

    window.onload = function () {
      console.log("got here");
      window.zeroExInstant.render({
        orderSource: 'https://api.radarrelay.com/0x/v2/'
      }, 'body');
    };
  }

  render() {
    return _react.default.createElement(_react.default.Fragment, null);
  }

}

var _default = Instant;
exports.default = _default;