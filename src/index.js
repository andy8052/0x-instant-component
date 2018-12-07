import React from 'react';

const relays = {
  "radar": "https://api.radarrelay.com/0x/v2/",
  "bamboo": "https://sra.bamboorelay.com/0x/v2/"
}

class Instant extends React.Component {

  componentDidMount() {
    let source = this.props.source != undefined && relays[this.props.source] != undefined ? relays[this.props.source] : relays["radar"]

    let renderJson;
    if (this.props.feeAddress != undefined && this.props.fee != undefined && parseFloat(this.props.fee) <= 0.05 && parseFloat(this.props.fee) > 0) {
      renderJson = {
          orderSource: source,
          affiliateInfo: {
            feeRecipient: this.props.feeAddress,
            feePercentage: parseFloat(this.props.fee)
          }
      }
    } else {
      renderJson = {
          orderSource: source
      }
    }

    const script = document.createElement("script");
    script.src = "https://instant.0xproject.com/instant.js";
    document.head.appendChild(script);

    window.onload = function() {
      window.zeroExInstant.render(renderJson, 'body');
    };
  }

  render() {
    return (
      <></>
    );
  }
}
export default Instant;
