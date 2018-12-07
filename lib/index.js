"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const relays = {
  "radar": "https://api.radarrelay.com/0x/v2/",
  "bamboo": "https://sra.bamboorelay.com/0x/v2/"
};

class Instant extends _react.default.Component {
  componentDidMount() {
    let source = this.props.source != undefined && relays[this.props.source] != undefined ? relays[this.props.source] : relays["radar"];
    let renderJson;

    if (this.props.feeAddress != undefined && this.props.fee != undefined && parseFloat(this.props.fee) <= 0.05 && parseFloat(this.props.fee) > 0) {
      renderJson = {
        orderSource: source,
        affiliateInfo: {
          feeRecipient: this.props.feeAddress,
          feePercentage: parseFloat(this.props.fee)
        }
      };
    } else {
      renderJson = {
        orderSource: source
      };
    }

    const script = document.createElement("script");
    script.src = "https://instant.0xproject.com/instant.js";
    document.head.appendChild(script);

    window.onload = function () {
      window.zeroExInstant.render(renderJson, 'body');
    };
  }

  render() {
    return _react.default.createElement(_react.default.Fragment, null);
  }

}

var _default = Instant;
exports.default = _default;