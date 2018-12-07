# 0x-instant-component

A plug and play 0x Instant component. 

## TODO
✅ Add props for supported tokens

✅ Add props for fees

⭕ Maybe find a better way to inject script

## Usage
`npm install 0x-instant-component`

The component will take 3 optional props
- source: currently takes either `"radar"` or `"bamboo"`. All other inputs will default to `radar`.
- fee: takes a string value of your fee percentage. This must be within the range of 0 < `fee` <= 0.05.
- feeAddress: takes an Ethereum address. Right now all it checks for is being defined. //TODO enforce hex address

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

Example with props:
```
import React, { Component } from 'react';
import Instant from '0x-instant-component';

class App extends Component {
  render() {
    return (
      <div>
        <Instant fee='0.04' feeAddress="0x23f9b9985bc838c5ad196b91e202794308a9fb40" source="bamboo"/>
      </div>
    );
  }
}

export default App;
```
