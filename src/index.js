import React from 'react';

class Instant extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://instant.0xproject.com/instant.js";
    document.head.appendChild(script);

    window.onload = function() {
      console.log("got here")
      window.zeroExInstant.render({
          orderSource: 'https://api.radarrelay.com/0x/v2/',
      }, 'body');
    };
  }

  render() {
    return (
      <></>
    );
  }
}
export default Instant;
