# 0x-instant-component

A plug and play 0x Instant component. 

## TODO
- Add props for supported tokens
- Add props for fees
- Maybe find a better way to inject script

## Usage
`npm install 0x-instant-component`

Example bare bones App.js:
```
import React, { Component } from 'react';
import Instant from '0x-instant-component';

class App extends Component {
  render() {
    return (
      <div>
        <Instant />
      </div>
    );
  }
}

export default App;
```
